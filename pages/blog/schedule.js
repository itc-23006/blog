import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

export default function Schedule ({
  title,
  publish,
  content,
  eyecatch,
  categories
}) {
  return (
    <Container>
      <h1>{title}</h1>
      {/* Render other components with the received props */}
    </Container>
  )
}

export async function getSchedule () {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
