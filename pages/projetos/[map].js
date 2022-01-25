import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useIsMounted } from '../../hooks/useIsMounted'
import Head from 'next/head'
import Title from '../../components/Title'
import Map from '../../components/Map'
import Api from '../../api/index'
import Link from 'next/link'
import * as S from './styled'

export default function SingleProject() {
  const router = useRouter()
  const query = router.query
  const [open, setOpen] = useState(false);

  const isMounted = useIsMounted();
  const [projectData, setProjectData] = useState();
  const [parentLoading, setParentLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!isMounted()) {
        return;
      }

      setParentLoading(true);

      let queryId = query?.id || '';
      queryId = Number(queryId)

      if (!queryId?.length) {
        await Api.getMaps().then((response) => {
          if (response?.data?.length) {
            const currentMap = response?.data?.find((map) => map.url_map === query?.map);

            if (currentMap?.id) {
              queryId = currentMap?.id;
            }
          }
        });
      }

      if (queryId) {
        await Api.getMap(queryId).then((response) => {
          setProjectData(response?.data)
        })
      }
    })();
  }, [isMounted, query?.id, query?.map]);

  useEffect(() => {
    if (projectData) {
      setParentLoading(false);
    }
  }, [projectData]);

  return (
    <>
      <Head>
        <title>{projectData?.title_seo?.length ? projectData?.title_seo : null}</title>

        <meta name="description" content={projectData?.description_seo?.length ? projectData?.description_seo : 'Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro'} />
    
        <meta property="og:title" content={projectData?.title_seo?.length ? projectData?.title_seo : 'Mapa da Informação - ITS'} />
        <meta property="og:description" content={projectData?.description_seo?.length ? projectData?.description_seo : 'Mapa da Informação é uma ferramenta para facilitar a compreensão do sistema de documentos brasileiro'} />
        <meta property="og:url" content={`https://mapadainformacao.com.br/projetos/${projectData?.url_map}`} />
        <meta property="og:site_name" content={projectData?.site_name_seo?.length ? projectData?.site_name_seo : 'Mapa da Informação'}/>

        <meta property="og:image" content={projectData?.image_seo?.url} />
        <meta name="twitter:image" content={projectData?.image_seo?.url} />
        
        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>

      <S.SingleProjectWrapper>
        <Title boldText={projectData?.title ? projectData?.title : null} />

        <div className="text" dangerouslySetInnerHTML={{ __html: projectData?.synopsis ? projectData?.synopsis : null }}></div>

        {projectData?.url_map == 'mapa-brasil' ? 
          <Link href={'/historias'} passHref>
            <S.HeaderLink onClick={() => setOpen(!open)}>
              Histórias
            </S.HeaderLink>
          </Link>
        : null}

        {!projectData ? <S.Loading>Loading ...</S.Loading> : null}
      </S.SingleProjectWrapper>
      
      {projectData ? <Map data={projectData} query={projectData.id} baseUrl={Api.baseUrl} /> : null}
    </>
  )
}