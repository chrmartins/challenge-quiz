﻿import * as S from './styles'

import FormRegister from '@components/FormRegister'


const RegisterQuestions = ({
  title = 'Formulário para Cadastro',
  description = 'Crie aqui suas perguntas e respostas.',
  questionId
}) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <FormRegister questionId={questionId} />
      </S.Wrapper>
    </>
  )
}
export default RegisterQuestions
