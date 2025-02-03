import { Hono } from "hono"
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer"
import { onlySSG } from "hono/ssg"

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string }
    ): Response
  }
}

const app = new Hono()
.use("*", jsxRenderer(({ children, title }) =>
  <html>
    <head>
      <title>{ title }</title>
    </head>
    <body>
      <div>{children}</div>
    </body>
  </html>
))
.get("/", c => c.render(
  <div>hello world</div>,
  { title: "TSK - 東北生徒会交流会" }
))
.notFound(c => c.render(
  <h1>404!</h1>,
  { title: "Not Found..." }
)).get("/404", onlySSG())

export default app
