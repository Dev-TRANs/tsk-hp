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
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      <title>{ title } - 東北生徒会交流会</title>
　　　　<meta name="description" content="東北地方の生徒会外務活動を推進すべく東北の生徒会に所属する学生が立ち上げた学生団体です。東北地方の生徒会コミュニティーの形成を目指しています。「つながる東北生徒会」を目指してイベントの運営を行っています。" />
      <link href="/main.css" rel="stylesheet" />
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Noto+Sans+JP:wght@100..900&family=Stick&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=task_alt" />
      { head?.() }
    </head>
    <body>
      <div id="main">{children}</div>
      <footer class="my-10">
				<p class="w-full text-center text-lg">Created by <a href="https://trans.stki.org/"><span class="font-['Allerta_Stencil'] underline font-base">TRANs</span></a></p>
      </footer>
    </body>
  </html>
}))
.get("/", c => c.render(
  <>
    <div class="relative p-5 grid grid-cols-2 gap-4 min-h-screen h-screen min-h-[512px] [&>img]:object-cover [&>img]:rounded-xl [&>img]:h-full [&>img]:overflow-hidden">
      <img src="/img/2313_1_m.jpg" class="place-self-end" />
      <img src="/img/2365_1_m.jpg" />
      <img src="/img/2383_1_m.jpg" class="place-self-end" />
      <img src="/img/2388_1_m.jpg" />
      <div class="absolute top-1/2 left-1/2 -translate-1/2 rounded-[50%] bg-sky-800 w-full max-w-[448px] min-w-[320px] aspect-square border-12 border-white place-content-center">
        <div class="text-white w-full text-center font-['Stick']">
          <p class="text-xl">東北生徒会交流委員会</p>
          <p class="text-4xl mt-4 font-bold">春季東北</p>
          <p class="text-4xl mt-2 font-bold">生徒会交流会</p>
          <p class="text-xl sm:text-2xl mt-4 sm:mt-6"><span class="text-3xl sm:text-4xl">3</span>月<span class="text-3xl sm:text-4xl">31</span>日(月) <span class="text-3xl sm:text-4xl">20:30~</span></p>
          <a href="https://forms.gle/JfTDq5AsEyU9AMWKA">
            <button class="text-2xl border border-white border-2 rounded-md px-4 py-2 mt-5 hover:bg-white hover:text-sky-800">参加申込</button>
          </a>
        </div>
      </div>
    </div>
    <div class="mx-auto w-[90vw] text-center mt-5">
      <h1 class="font-bold text-4xl text-sky-800 font-['Stick']">- 内容 -</h1>
      <div class="text-xl mt-4 inline-block text-left">
        <p><span class="material-symbols-outlined me-2 text-sky-800">task_alt</span>東北六県の生徒会活動での悩み共有</p>
        <p class="mt-2"><span class="material-symbols-outlined me-2 text-sky-800">task_alt</span>悩みの解決策をディスカッション</p>
      </div>
      <h1 class="font-bold text-4xl text-sky-800 font-['Stick'] mt-10">- 対象 -</h1>
      <div class="text-xl mt-4 inline-block text-left">
        <p><span class="material-symbols-outlined me-2 text-sky-800">task_alt</span>東北地方の生徒会</p>
      </div>
    </div>
    <h1 class="text-center font-bold text-3xl sm:text-4xl font-['Stick'] mt-10"><span class="text-sky-800">東北生徒会交流会</span>とは</h1>
    <div class="mt-4 mx-auto w-[90vw] sm:w-[80vw] text-base/8">
      <p>東北生徒会交流会は「東北地方にも生徒会外務の仕事を広めよう！」という思いから生まれた交流イベントです。</p>
      <p>生徒会には”外務”という外と関わる仕事もあります。しかし、東北地方にはあまり外務の仕事は浸透しておらず、ほかの学校の生徒会員と関わる機会もほとんど存在しませんでした。</p>
      <p>そこで今回「春季東北生徒会交流会」と題し、東北の生徒会所属の学生がつながれるコミュニティを形成するためのイベントを開催することになりました！！</p>
      <p>初回となる今回のイベントでは今まで打ち明けることもできなかった”生徒会ならではの悩み”などを共有し、一緒になって悩みを解消しよう！という内容を用意しました！</p>
      <p>また、イベント後には自分の学校を紹介したり他校の方と交流できる時間を用意しています。</p>
      <p>他校を知る数少ない機会ですのでぜひ交流してみてください！</p>
      <p>おそらくほとんどの方は初めての経験になると思いますが、型にとらわれない自由な雰囲気を造ってより多くの方が「楽しかった」と思えるような企画を目指しています。</p>
    </div>
    <div class="w-[90vw] sm:w-[80vw] mt-10 border border-sky-800 border-4 p-5 mx-auto rounded-xl">
      <h1 class="text-center font-bold text-3xl sm:text-4xl font-['Stick'] text-sky-800">イベント概要</h1>
      <table class="mt-4">
        <tbody class="[&>tr]:bg-white [&>tr]:border-b [&>tr]:border-gray-300 [&_td]:py-2 [&_td]:px-1 [&_td]:w-3/4 [&_th]:py-2 [&_th]:font-bold [&_th]:w-1/4 text-left">
          <tr>
            <th>名称</th>
            <td>春季東北生徒会交流会</td>
          </tr>
          <tr>
            <th>開催日時</th>
            <td>令和7年3月31日(月)　20：30～</td>
          </tr>
          <tr>
            <th>参加対象</th>
            <td>東北地方の中学・高校の生徒会に所属している方。</td>
          </tr>
          <tr>
            <th>内容</th>
            <td>東北六県の生徒会メンバーが集まり、生徒会活動での悩みなどを共有し一緒に解決方法を模索するイベントとなっています。</td>
          </tr>
          <tr>
            <th>開催場所</th>
            <td>Zoomでのオンライン開催となります。参加者の方には追ってURLを送付いたします。</td>
          </tr>
          <tr>
            <th>申込期日</th>
            <td>令和7年3月24日(月)　22：00まで</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-[90vw] sm:w-[80vw] mt-10 border border-sky-800 border-4 p-5 mx-auto rounded-xl bg-sky-800 text-white">
      <h1 class="text-center font-bold text-3xl sm:text-4xl font-['Stick']">東北生徒会交流委員会(TSK)とは</h1>
      <div class="mt-4 mx-auto text-base/8">
        <p>東北地方の生徒会外務活動を推進すべく東北の生徒会に所属する学生が立ち上げた学生団体です。</p>
        <p>東北地方の生徒会コミュニティーの形成を目指しています。</p>
        <p>「つながる東北生徒会」を目指してイベントの運営を行っています。</p>
        <p>代表　毛利仁哉</p>
      </div>
    </div>
  </>,
  {
    title: "TSK - 東北生徒会交流会"
  }
))
.get("/404", c => c.render( // app.notFound()
  <h1>404!</h1>,
  { title: "Not Found..." }
))

export default app
