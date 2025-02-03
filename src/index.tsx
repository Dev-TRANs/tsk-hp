import { Hono } from "hono"
import { jsxRenderer } from "hono/jsx-renderer"
import type { JSX } from "hono/jsx/jsx-runtime"
// import { css, cx, keyframes, Style } from 'hono/css'

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string, Head?: () => JSX.Element }
    ): Response
  }
}

const app = new Hono()
.use("*", jsxRenderer(({ children, title, Head }) => {
  return <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <title>{ title } - 東北生徒会交流会</title>
      <link href="/main.css" rel="stylesheet" />
      { Head && <Head /> }
    </head>
    <body>
      <header>
        <span>TSK - 東北生徒会交流会</span>
      </header>
      <div>{children}</div>
      <footer>
        footer...
      </footer>
    </body>
  </html>
}))
.get("/", c => c.render(
  <>
    <table style="">
      <tr><td>T</td><td>東北</td></tr>
      <tr><td>S</td><td>生徒会</td></tr>
      <tr><td>K</td><td>交流会</td></tr>
    </table>
  </>,
  { title: "TSK - 東北生徒会交流会" }
))
.get("/404", c => c.render( // app.notFound()
  <h1>404!</h1>,
  { title: "Not Found..." }
))

export default app
