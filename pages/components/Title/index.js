import * as S from './styled'

export default function Title({ lightText, boldText }) {
  return (
    <S.TitleWrapper>
    <S.Light>{lightText}</S.Light>
    <S.Bold>{boldText}</S.Bold>
    </S.TitleWrapper>
  )
}