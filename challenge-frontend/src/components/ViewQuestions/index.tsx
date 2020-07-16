﻿import * as S from './styles'

import ListView from '@components/ListView'

const ViewQuestions = ({
  title = 'Perguntas Cadastradas',
  description = 'Edite ou exclua suas perguntas'
}) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <ListView />
      </S.Wrapper>
    </>
  )
}
export default ViewQuestions
