import { extract } from '$std/front_matter/any.ts'
import { join } from '$std/path/mod.ts'

export interface Post {
  slug: string
  title: string
  publishedAt: Date
  content: string
  snippet: string
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir('./posts')
  const promises = []
  for await (const file of files) {
    const slug = file.name.replace('.md', '')
    promises.push(getPost(slug))
  }
  const posts = await Promise.all(promises) as Post[]
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
  return posts
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join('./posts', `${slug}.md`))
  const { attrs, body } = extract<Record<string, string>>(text)
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  }
}

export const parseContent = (content: string) => {
  const res = content.replace(/\n/g, '<br/>')
  return res
}
