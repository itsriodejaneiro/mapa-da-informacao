import Head from 'next/head'
import * as S from './styled'

export default function StoriesPage() {
  return (
    <>
      <Head>
        <title>Histórias</title>
        <meta property="og:title" content="Mapa da Informação - ITS"/>
        <meta property="og:description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
        <meta property="og:url" content="https://mapadainformacao.com.br/"/>
        <meta name="description" content="Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro"/>
        <meta property="og:image" content=""/>
        <meta name="twitter:image" content=""/> 
        <meta property="og:site_name" content="Mapa da Informação"/>
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