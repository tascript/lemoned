import { Head } from "$fresh/runtime.ts"

export default function Error404() {
  return (
    <>
      <Head>
        <title>ページが見つかりません</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">ページが見つかりません</h1>
          <p class="my-4">
            アドレスバーに入力されたURLをチェックしてみてね！
          </p>
          <a href="/" class="underline">ホームへ戻る</a>
        </div>
      </div>
    </>
  )
}
