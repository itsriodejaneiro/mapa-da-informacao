import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Api from '../../api/index'
import * as S from './styled'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  useEffect( () => {
    Api.getMaps().then((response) => {
      if (response?.data?.length !== 0) {
        setProjects(response.data);
      }
    })  
  }, [])

  return (
    <>
      <Head>
        <title>Projetos - Mapa da Informação</title>
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
      
      <S.ProjectsWrapper>
        <Title lightText={'Projetos'} />
        <Text text='O Brasil precisa de um mapa do recurso mais importante para o desenvolvimento econômico no mundo contemporâneo: a informação. No setor público, o tratamento das informações do cidadão é frequentemente caótico.' />

        <S.ProjectList>
          {projects.length !== 0 ? projects.map((item) => (
            <S.ProjectItem key={item?.id}>
              <Image
              	alt={item?.title}
                src={`${item?.project_cover?.url}`}
                width={300}
                height={200}
              />
              <S.ProjectInfo>
                <Link href={{ pathname: `/projetos/[map]/`, query:{ map: item?.url_map, id: item?.id }}} as={`/projetos/${item?.url_map}/`}>
                  {item?.title}
                </Link>
                <Text text={item?.synopsis} />
              </S.ProjectInfo>
            </S.ProjectItem>
          )) : <div>Loading ...</div>}
        </S.ProjectList>
      </S.ProjectsWrapper> 
    </>
  )
}