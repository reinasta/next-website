import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="">
        More Stories
      </h2>
      <div className="">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            //coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
