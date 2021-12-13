import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal Mapa da Informação</title>
        <meta property="og:title" content="Portal Mapa da Informação"/>
        <meta property="og:description" content="Como o governo armazena e processa as informações para ofertar serviços para os cidadãos?"/>
        <meta property="og:url" content="https://mapadainformacao.com.br/"/>
        <meta name="description" content="Como o governo armazena e processa as informações para ofertar serviços para os cidadãos?"/>
        <meta property="og:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'} />
        <meta name="twitter:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  /> 
        <meta property="og:site_name" content="Governança de Dados dos Serviços e Informações aos Cidadãos"/>
        
        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      <Hero />
    </>
  )
}
