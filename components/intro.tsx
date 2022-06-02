import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="">
      <h1 className="">
        Website
      </h1>
      <h4 className="">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className=""
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}

export default Intro
