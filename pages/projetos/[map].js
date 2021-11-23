import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useIsMounted } from '../../hooks/useIsMounted'
import Head from 'next/head'
import Title from '../components/Title'
import Map from '../components/Map'
import Api from '../api/index'
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
        <title>{projectData?.title?.length ? projectData?.title : null}</title>
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