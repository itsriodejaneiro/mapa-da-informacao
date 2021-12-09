import Head from 'next/head'
import Hero from '../components/Hero'
// import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('./components/Hero'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Mapa da Informação</title>
        <meta property="og:title" content="Mapa da Informação - ITS"/>
        <meta property="og:description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
        <meta property="og:url" content="https://mapadainformacao.com.br/"/>
        <meta name="description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
        <meta property="og:image" content=""/>
        <meta name="twitter:image" content=""/> 
        <meta property="og:site_name" content="Mapa da Informação"/>
      </Head>
      <Hero />
    </>
  )
}
