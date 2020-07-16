﻿import * as S from './styles'

import Link from 'next/link'

const Buttons = ({
  TitleButtonRegister = 'Cadastrar Perguntas e Respostas',
  TitleButtoView = 'Visualizar Perguntas e Respostas'
}) => (
  <S.ButtonsWrapper>
    <div>
      <Link href="/register">
        <S.Buttons>{TitleButtonRegister}</S.Buttons>
      </Link>
    </div>
    <div>
      <Link href="/viewlist">
        <S.Buttons>{TitleButtoView}</S.Buttons>
      </Link>
    </div>
  </S.ButtonsWrapper>
)

export default Buttons
