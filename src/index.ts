import { Hono } from "hono"

const app = new Hono()
.get("/", c => c.html("hello world"))

export default app
