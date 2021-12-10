import Head from 'next/head'
import * as S from './styled'

export default function StoriesPage() {
  return (
    <>
      <Head>
        <title>Histórias - Mapa da Informação</title>
        <meta property="og:title" content="Histórias - Mapa da Informação"/>
        <meta property="og:description" content="Conheça histórias real e fictícia sobre a importância e desafios da identificação da população brasileira."/>
        <meta property="og:url" content="https://mapadainformacao.com.br/historias"/>
        <meta name="description" content="Conheça histórias real e fictícia sobre a importância e desafios da identificação da população brasileira."/>
        <meta property="og:image" content=""/>
        <meta name="twitter:image" content=""/> 
        <meta property="og:site_name" content="Histórias sobre a identificação dos cidadãos "/>

        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      
      <S.StoriesWrapper>
        <iframe
          src="/historias.html"
          frameBorder="0"
          title="Histórias"
        />
      </S.StoriesWrapper>
    </>
  )
}