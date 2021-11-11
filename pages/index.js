import Head from 'next/head'
import Hero from './components/Hero'
// import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('./components/Hero'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Mapa da Informação</title>
      </Head>
      <Hero />
    </>
  )
}
