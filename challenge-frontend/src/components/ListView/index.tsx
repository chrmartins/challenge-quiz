﻿import React, { useEffect, useState } from 'react'
import fetchGraphQl from 'service/fetchGraphQl'
import Router from 'next/router'

import * as S from './styles'

function ViewQuestions() {
  const [listQuestions, setListQuestions] = useState([])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [question, setQuestion] = useState('')

  const [reload, setReload] = useState(0)

  //Requisição ao servidor com graphql
  useEffect(() => {
    async function getQuestions() {
      const query = await fetchGraphQl(`
        query questions {
          questions{
            id
            question
            options
            answerID
          }
        }
      `)

      const { questions } = query.data
      setListQuestions(questions)

      console.log(questions)
    }

    getQuestions()
  }, [reload])

  async function getQuestion(id: string) {
    Router.push(`/register?questionId=${id}`)
  }

  async function deleteQuestion(id: string) {
    console.log('deletar')

    const query = await fetchGraphQl(
      `
    mutation deleteQuestion($id: ID) {
      deleteQuestion (
        id: $id
      ){
        id
      }
    }
  `,
      { id: id }
    )

    if (query.data) {
      const { deleteQuestion } = query.data

      if (deleteQuestion === null) {
        success('Questão excluída com sucesso.')
      }
    }
  }

  function success(text, ctrl = true) {
    if (ctrl) {
      alert(text)
      setReload(reload + 1)
    }

    setQuestion('')
  }

  return (
    <S.Wrapper className="ViewQuestions">
      <div id="list-question" className="box-div">
        <ul id="question-ul">
          {listQuestions.map((quest, index) => (
            <li key={quest.id}>
              <div>
                <span className="question-ul-number">{index + 1}</span>{' '}
                <span>{quest.question}</span>
              </div>
              <div>
                <S.Button
                  className="btn-edit"
                  onClick={() => getQuestion(quest.id)}
                >
                  EDITAR
                </S.Button>
                <S.Button
                  className="btn-del"
                  onClick={() => deleteQuestion(quest.id)}
                >
                  EXCLUIR
                </S.Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Wrapper>
  )
}

export default ViewQuestions
