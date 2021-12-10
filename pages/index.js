import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  console.log(process.env.STATUS)
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
        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      <Hero />
    </>
  )
}
