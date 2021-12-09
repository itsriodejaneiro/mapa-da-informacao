import Image from 'next/image'
import Link from 'next/link'
import Title from '../Title'
import Text from '../Text'
import * as S from './styled'

export default function Hero() {
  return (
    <>
      <S.HeroContainer>
        <S.HeroTitle>
          <S.HeroImage>
            <Image
              alt="Documentos"
              src="/documentos.gif"
              width={450}
              height={450}
            />
          </S.HeroImage>

          <S.HeroInfo>
            <Title lightText={'Mapa da'} boldText={'Informação'} />
            <Text text={'Como o governo armazena e processa as informações de identificação dos cidadãos?'} />
          </S.HeroInfo>  
        </S.HeroTitle>
        
        <S.HeroCTA>
          <Link href="/sobre" passHref>
            <a>Clique aqui para entrar</a>
          </Link>
          <Link href="/sobre" passHref>
            <a>
              <Image
                alt="Clique aqui"
                src="/arrow-down.svg"
                width={64}
                height={64}
              />
            </a>
          </Link>
        </S.HeroCTA>
      </S.HeroContainer>
    </>
  )
}