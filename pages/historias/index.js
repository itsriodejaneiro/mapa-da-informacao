import Head from 'next/head'
// import Transition from '../components/Transition'
import * as S from './styled'

export default function StoriesPage() {
  return (
    <>
      <Head>
        <title>Histórias</title>
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