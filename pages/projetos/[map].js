import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useIsMounted } from '../../hooks/useIsMounted'
import Head from 'next/head'
import Title from '../../components/Title'
import Map from '../../components/Map'
import Api from '../../api/index'
import * as S from './styled'

export default function SingleProject() {
  const router = useRouter()
  const query = router.query
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

      if (!queryId?.length) {
        await Api.getMaps().then((response) => {
          if (response?.data?.length) {
            const currentMap = response?.data?.find((map) => map.url_map === query?.map);

            if (currentMap?.id?.length) {
              queryId = currentMap?.id;
            }
          }
        });
      }

      if (queryId?.length) {
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
      </Head>

      <S.SingleProjectWrapper>
        <Title boldText={projectData?.title ? projectData?.title : null} />
        <p>{projectData?.synopsis ? projectData?.synopsis : null}</p>
        {!projectData ? <div>Loading ...</div> : null}
      </S.SingleProjectWrapper>

      {projectData ? <Map data={projectData} query={projectData.id} baseUrl={Api.baseUrl} /> : null}
    </>
  )
}