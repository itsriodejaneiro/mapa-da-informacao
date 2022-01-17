import Head from 'next/head'
import Title from '../../components/Title'
import Text from '../../components/Text'
import * as S from './styled'
import Disclaimer from '../../components/Disclaimer'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre - Mapa da Informação</title>
        <meta property="og:title" content="Sobre - Mapa da Informação"/>
        <meta property="og:description" content="O Portal do Mapa da Informação apoia a governança de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informação e do objeto a ser aprofundado."/>
        <meta property="og:url" content="https://mapadainformacao.com.br/sobre"/>
        <meta name="description" content="O Portal do Mapa da Informação apoia a governança de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informação e do objeto a ser aprofundado."/>
        <meta property="og:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  />
        <meta name="twitter:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  /> 
        <meta property="og:site_name" content="Sobre o Portal Mapa da Informação"/>

        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      
      <S.AboutWrapper>
        <Title lightText={'Mapa da'} boldText={'Informação'} />
        <Text text='O Brasil precisa de um mapa de um dos recursos mais importantes para o desenvolvimento econômico no mundo contemporâneo: a informação. O tratamento das informações do cidadão muitas vezes pode ser caótico, em todos os níveis da administração pública - municipal, estadual e federal. Existem dezenas de sistemas que não conversam entre si, muitas vezes os dados não estão disponíveis e constantemente são criados silos informacionais, dificultando a sua utilização eficaz.' />
        <Text text='Quem paga o preço de tudo isso não é só a administração pública, mas principalmente o cidadão. Hoje, os processos administrativos tendem a demorar mais do que deveriam e precisam ser repetidos nos diferentes órgãos governamentais, o que leva a um custo mais alto do que o necessário.' />
        <Text text='O Portal Mapa da Informação se apresenta como uma ferramenta valiosa para apoiar a governança de dados do setor público.  O mapeamento do ecossistema informacional a ser aprimorado - órgãos gestores, bases de dados, serviços e políticas relacionadas - é fundamental para um debate informado sobre documentos, desburocratização, acesso e qualidade dos serviços públicos no Brasil.' />
        <Text text='É diante deste cenário que a ferramenta “Mapa da Informação” expõe o problema e ajuda a formular uma pergunta simples, mas poderosa: como podemos melhorar?' />
        <Text text='Já foram feitos Mapas da Informação do “Sistema de Identificação Brasileiro” e também dos “Serviços do estado do Maranhão”. Quer fazer também da sua cidade ou estado, fale com a gente!' />

        <iframe
          width="90%"
          height="407"
          src={`https://www.youtube.com/embed/T5MVxh-epvY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        <Disclaimer text={'-'} />
        <Disclaimer text={'O Mapa da Informação está em fase de testes.'} />
        <Disclaimer text={'Se desejar contribuir envie um e-mail para its@itsrio.org.'} />
      </S.AboutWrapper>
    </>
  )
}