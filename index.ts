import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = Math.floor(Math.random() * 100000);
});
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 3000 });
