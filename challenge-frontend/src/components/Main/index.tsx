import * as S from './styles'

import Buttons from '@components/Buttons'

const Main = ({ title = 'Challenge Questions', description = 'QUIZ!' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Buttons />
  </S.Wrapper>
)

export default Main
