import Head from 'next/head'
import Title from '../../components/Title'
import Text from '../../components/Text'
import * as S from './styled'
import Disclaimer from '../../components/Disclaimer'

export default function AboutPage() {
  console.log(window.location.origin)
  return (
    <>
      <Head>
        <title>Sobre - Mapa da Informação</title>
        <meta property="og:title" content="Sobre - Mapa da Informação"/>
        <meta property="og:description" content="O Portal do Mapa da Informação é uma ferramenta para apoiar na governança de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informação do objeto que se gostaria de aprofundar."/>
        <meta property="og:url" content="https://mapadainformacao.com.br/sobre"/>
        <meta name="description" content="O Portal do Mapa da Informação é uma ferramenta para apoiar na governança de dados dos governos federal, estadual e municipal, proporcionando um maior entendimento do sistema de informação do objeto que se gostaria de aprofundar."/>
        <meta property="og:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  />
        <meta name="twitter:image" content={process.env.STATUS == 'production' ? 'https://mapadainformacao.com.br/share.jpg' : 'http://mapa-da-informacao.herokuapp.com/share.jpg'}  /> 
        <meta property="og:site_name" content="Sobre o Portal Mapa da Informação "/>

        { process.env.STATUS == 'production' ? <meta name="robots" content="index, follow" /> : null }
        { process.env.STATUS == 'production' ? <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
        { process.env.STATUS == 'production' ? <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> : null }
      </Head>
      
      <S.AboutWrapper>
        <Title lightText={'Mapa da'} boldText={'Informação'} />
        <Text text='O Brasil precisa de um mapa do recurso mais importante para o desenvolvimento econômico no mundo contemporâneo: a informação. No setor público, o tratamento das informações do cidadão é frequentemente caótico. Temos dezenas de sistemas que não conversam entre si, dados são perdidos constantemente, silos informacionais são mal utilizados e assim por diante.' />
        <Text text='Quem paga o preço de tudo isso é o cidadão. Hoje, os processos administrativos demoram muito mais do que deveriam, precisam ser repetidos a cada órgão governamental e são muito mais caros do que o necessário.' />
        <Text text='Este mapa expõe o problema e ajuda a formular uma pergunta simples, mas poderosa: como podemos melhorar?' />
        
        <iframe
          width="90%"
          height="407"
          src={`https://www.youtube.com/embed/T5MVxh-epvY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <Text text='A primeira versão do mapa enfatiza os silos de informações relacionados aos documentos pessoais, que são fundamentais no relacionamento do Cidadão com o Estado.' />
        <Text text='Estão representadas seis camadas do ecossistema dos documentos no Brasil: os órgãos gestores, os operadores de tecnologia da informação, as bases de dados, os aplicativos (apps), os documentos e os serviços e políticas relacionados.' />
        <Text text='O mapeamento visa auxiliar na discussão melhor informada sobre documentos, desburocratização, acesso e qualidade dos serviços públicos no Brasil.' />
        <Text text='O Mapa da Informação é um projeto do Instituto de Tecnologia e Sociedade do Rio (ITS Rio).' />
        <Disclaimer text={'-'} />
        <Disclaimer text={'Em fase de testes. Se desejar contribuir envie um e-mail para its@itsrio.org.'} />
      </S.AboutWrapper>
    </>
  )
}