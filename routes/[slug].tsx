import { Handlers, type PageProps } from "$fresh/server.ts"
import { Post, getPost } from "~/utils/index.ts"


export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug)
      if (post) {
        return ctx.render(post)
      }
      return ctx.renderNotFound()
    } catch {
      return ctx.renderNotFound()
    }
  },
}

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
      <div class="mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
    </main>
  )
}