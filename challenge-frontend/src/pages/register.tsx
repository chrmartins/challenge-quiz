﻿import RegisterQuestions from '../components/RegisterQuestions'

import { useRouter } from 'next/router'

export default function Register() {
  const {
    query: { questionId }
  } = useRouter()

  return (
    <>
      <RegisterQuestions questionId={questionId} />
    </>
  )
}
