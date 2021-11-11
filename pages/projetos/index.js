import { useEffect, useState } from 'react'
import Router, { withRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../components/Title'
import Text from '../components/Text'
import Transition from '../components/Transition'

import Api from '../api/index'

import * as S from './styled'

export default function ProjectsPage({ maps, categories, nodes }) {
  const [projects, setProjects] = useState([]);
  
  useEffect( () => {
    Api.getMaps().then((response) => {
      if (response?.data?.length !== 0) {
        setProjects(response.data);
      }
    })  
  }, [])

  return (
    <Transition>
      <Head>
        <title>Projetos - Mapa da Informação</title>
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
          )) : null}
        </S.ProjectList>
      </S.ProjectsWrapper> 
    </Transition>
  )
}