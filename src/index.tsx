import { Hono } from "hono"
import { jsxRenderer } from "hono/jsx-renderer"
import type { JSX } from "hono/jsx/jsx-runtime"
// import { css, cx, keyframes, Style } from 'hono/css'

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string, head?: () => JSX.Element }
    ): Response
  }
}

const app = new Hono()
.use("*", jsxRenderer(({ children, title, head }) => {
  return <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <title>{ title } - 東北生徒会交流会</title>
      <link href="/main.css" rel="stylesheet" />
      { head?.() }
    </head>
    <body>
      <header>
        <span>TSK - 東北生徒会交流会</span>
      </header>
      <div id="main">{children}</div>
      <footer>
        footer...
      </footer>
    </body>
  </html>
}))
.get("/", c => c.render(
  <>
    <div id="logo"><table>
      <tr><td>T</td><td>東北</td></tr>
      <tr><td>S</td><td>生徒会</td></tr>
      <tr><td>K</td><td>交流会</td></tr>
    </table></div>
    <div>
      2025年 3月 31日 (月曜日) 20:30から
    </div>
    <div>
      <div>東北六県の生徒会活動での悩み共有</div>
      <div>悩みの解決策をディスカッション</div>
    </div>
    <div>
      <div>東北地方の生徒会</div>
    </div>
  </>,
  {
    title: "TSK - 東北生徒会交流会",
    head: () => <><link href="/main.css" rel="stylesheet" /></>
  }
))
.get("/404", c => c.render( // app.notFound()
  <h1>404!</h1>,
  { title: "Not Found..." }
))

export default app
