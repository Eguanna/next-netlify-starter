import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  // Get started by editing <code>pages/index.js
  return (
    <div className="container">
      <Head>
        <title>창융1 시연</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
