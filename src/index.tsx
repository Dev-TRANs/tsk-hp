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
        Created by <a href="https://trans.stki.org/">TRANs</a>
      </footer>
    </body>
  </html>
}))
.get("/", c => c.render(
  <>
    <div id="top">
      <div id="logo"><table>
        <tr><td>T</td><td>東北</td></tr>
        <tr><td>S</td><td>生徒会</td></tr>
        <tr><td>K</td><td>交流会</td></tr>
      </table></div>
      <div id="logo-right">
        お申し込みは<a href="https://docs.google.com/forms/d/e/1FAIpQLSfMosW5smKyY7ntmF7P34l2c-xMkohgJ8LgAR8-AjppOWHqOQ/viewform">こちら</a>から
      </div>
    </div>
    <div>
      <h3>ー東北生徒会交流会とはー</h3>
      東北生徒会交流会は「東北地方にも生徒会外務の仕事を広めよう！」という思いから生まれた交流イベントです。
      生徒会には”外務”という外と関わる仕事もあります。しかし、東北地方にはあまり外務の仕事は浸透しておらず、ほかの学校の生徒会員と関わる機会もほとんど存在しませんでした。
      そこで今回「春季東北生徒会交流会」と題し、東北の生徒会所属の学生がつながれるコミュニティを形成するためのイベントを開催することになりました！！
      初回となる今回のイベントでは今まで打ち明けることもできなかった”生徒会ならではの悩み”などを共有し、一緒になって悩みを解消しよう！という内容を用意しました！
      また、イベント後には自分の学校を紹介したり他校の方と交流できる時間を用意しています。
      他校を知る数少ない機会ですのでぜひ交流してみてください！
      おそらくほとんどの方は初めての経験になると思いますが、方にとらわれない自由な雰囲気を造ってより多くの方が「楽しかった」と思えるような企画を目指しています。
    </div>
    <div>2025年 3月 31日 (月曜日) 20:30から</div>
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
    head: () => <><link href="/home.css" rel="stylesheet" /></>
  }
))
.get("/404", c => c.render( // app.notFound()
  <h1>404!</h1>,
  { title: "Not Found..." }
))

export default app
