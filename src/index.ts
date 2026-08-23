import { DurableObject } from "cloudflare:workers";
import { Hono } from "hono";

export class App extends DurableObject {
  private app = new Hono();

  constructor(state: DurableObjectState, env: any) {
    super(state, env);

    // Initialize Schema
    this.ctx.storage.sql.exec(`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        score INTEGER DEFAULT 0,
        status TEXT DEFAULT 'analyzing',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS artifacts (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL,
        type TEXT NOT NULL,
        content TEXT NOT NULL,
        is_stale BOOLEAN DEFAULT FALSE,
        depends_on TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(project_id) REFERENCES projects(id)
      );
    `);

    this.setupRoutes();
  }

  private setupRoutes() {
    this.app.get("/api/projects", (c) => {
      try {
        const projects = this.ctx.storage.sql.exec("SELECT * FROM projects ORDER BY created_at DESC").toArray();
        return c.json(projects);
      } catch (e) {
        return c.json([], 200);
      }
    });

    this.app.post("/api/projects", async (c) => {
      const { id, name, description } = await c.req.json();
      this.ctx.storage.sql.exec(
        "INSERT INTO projects (id, name, description, score, status) VALUES (?, ?, ?, ?, ?)",
        id, name, description, 45, 'analyzing'
      );
      
      // Seed initial artifacts simulation
      const artifacts = [
        { type: 'validation', content: '{"score": 45, "recommendation": "Pivot to a narrower niche."}' },
        { type: 'strategy', content: '{"positioning": "The Publisher Layer"}' }
      ];

      for (const art of artifacts) {
        this.ctx.storage.sql.exec(
          "INSERT INTO artifacts (id, project_id, type, content) VALUES (?, ?, ?, ?)",
          crypto.randomUUID(), id, art.type, art.content
        );
      }

      return c.json({ ok: true, id });
    });

    this.app.get("/api/projects/:id", (c) => {
      const id = c.req.param("id");
      const project = this.ctx.storage.sql.exec("SELECT * FROM projects WHERE id = ?", id).one();
      const artifacts = this.ctx.storage.sql.exec("SELECT * FROM artifacts WHERE project_id = ?", id).toArray();
      return c.json({ ...project, artifacts });
    });
  }

  async fetch(request: Request) {
    return this.app.fetch(request);
  }
}

export default {
  async fetch(request: Request, env: any) {
    const id = env.APP.idFromName("singleton");
    const obj = env.APP.get(id);
    return obj.fetch(request);
  }
};
