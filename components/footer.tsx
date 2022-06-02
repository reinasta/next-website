import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className='main-width'>
      <Container>
        <div className="">
          <h3 className="">
            Statically Generated with Next.js.
          </h3>
          <div className="">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className=""
            >
              Read Documentation
            </a>
            <span> | </span>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className=""
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
