import Container from '../components/container'
import Link from 'next/link'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Website</title>
        </Head>
        <Container>
          <Intro />
          <Link href='/blog'>
            <a>Read the Blog</a>
          </Link>
        </Container>
      </Layout>
    </>
  )
}

export default Index