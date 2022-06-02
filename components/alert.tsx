import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div className="">
      <Container>
        <div className='main-width'>
          {preview ? (
            <code>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className=""
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </code>
          ) : (
            <code>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className=""
              >
                available on GitHub
              </a>
              .
            </code>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
