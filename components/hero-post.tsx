import Avatar from './avatar'
import DateFormatter from './date-formatter'
//import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  //coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  //coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="">
        {/* <CoverImage title={title} src={coverImage} slug={slug} />  */}
      </div>
      <div className="">
        <div>
          <h3 className="">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="">{title}</a>
            </Link>
          </h3>
          <div className="">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */} 
        </div>
      </div>
    </section>
  )
}

export default HeroPost
