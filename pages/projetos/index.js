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
      // console.log(response.data)
      if (response?.data?.length !== 0) {
        setProjects(response.data);
      }
    })  
  }, [])

  return (
    <>
      <Head>
        <title>Projetos - Portal Mapa da Informação</title>
        <meta property="og:title" content="Projetos - Portal Mapa da Informaçã"/>
        <meta property="og:description" content="A informação é a melhor ferramenta para tomadas de decisões. Conheça aqui os projetos do Portal Mapa da Informação"/>
        <meta property="og:url" content="https://mapadainformacao.com.br/"/>
        <meta name="description" content="A informação é a melhor ferramenta para tomadas de decisões. Conheça aqui os projetos do Portal Mapa da Informação"/>
        <meta property="og:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'} />
        <meta name="twitter:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  /> 
        <meta property="og:site_name" content="Projetos do Portal do Mapa da Informação"/>

        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      
      <S.ProjectsWrapper>
        <Title lightText={'Projetos'} />
        <Text text='A informação é um poderoso instrumento para tomadas de decisões. O Portal do Mapa da Informação apoia a governança de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informação e do objeto a ser aprofundado.' />
        <Text text='Confira aqui os projetos que já foram feitos:' />
        
        <S.ProjectList>
          {projects.length !== 0 ? projects.map((item) => (
            <S.ProjectItem key={item?.id}>
              <Image
              	alt={item?.title}
                src={`${item?.project_cover}`}
                width={380}
                height={280}
              />
              <S.ProjectInfo>
                <Link href={{ pathname: `/projetos/[map]/`, query:{ map: item?.url_map, id: item?.id }}} as={`/projetos/${item?.url_map}/`}>
                  {item?.title}
                </Link>
                <Text text={item?.summary} />
              </S.ProjectInfo> 
            </S.ProjectItem>
          )) : <div>Loading ...</div>}
        </S.ProjectList>
      </S.ProjectsWrapper> 
    </>
  )
}