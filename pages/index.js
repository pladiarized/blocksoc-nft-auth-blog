import Head from 'next/head'
import PageHeaderSection from '../components/misc/PageHeaderSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Auth</title>
        </Head>
        
        <PageHeaderSection title="NFT Auth" subtitle="A non-fungible token based authentication system" />

    </>
  )
}
