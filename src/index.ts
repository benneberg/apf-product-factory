import { Hono } from "hono";

const app = new Hono();

app.get("/api/hello", (c) => c.json({ message: "Hello from APF" }));

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return app.fetch(request, env);
    }
    // Let the platform handle assets for non-API routes
    return new Response("Not found", { status: 404 });
  }
};
