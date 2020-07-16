﻿import React, { useState, useEffect } from 'react'
import fetchGraphQl from 'service/fetchGraphQl'
import Router from 'next/router'

import * as S from './styles'
import { lstat } from 'fs'

import Link from 'next/link'

function App({ questionId }) {
  const [questionID, setQuestionID] = useState(questionId || '')

  const [question, setQuestion] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [answerID, setAnswerID] = useState('1')

  const [reload, setReload] = useState(0)

  useEffect(() => {
    if (questionId !== undefined) {
      getQuestion(questionId)
    }
  }, [questionId])

  async function getQuestion(id: string) {
    const query = await fetchGraphQl(
      `
      query question($id: ID!) {
        question (id: $id){
          id
          question
          options
          answerID
        }
      }
    `,
      { id: id }
    )

    if (query.data.question) {
      const { question } = query.data
      console.log(question)
      setQuestion(question.question)
      setQuestionID(question.id)
      setAnswerID(question.answerID)
      setOption1(question.options[0])
      setOption2(question.options[1])
      setOption3(question.options[2])
      setOption4(question.options[3])
    }
  }

  //Requisição ao servidor com graphql

  async function createQuestion(event) {
    event.preventDefault()

    const opt = [option1, option2, option3, option4]
    const query = await fetchGraphQl(
      `
    mutation createQuestion($question: String, $options: [String], $answerID: String) {
      createQuestion (
        question: $question
        options: $options
        answerID: $answerID
      ){
        id
        question
        options
        answerID
      }
    }
  `,
      { question: question, options: opt, answerID: answerID + '' }
    )

    if (query.data) {
      Router.push('/viewlist')
    }
  }

  async function updateQuestion(event: Event) {
    event.preventDefault()
    console.log(answerID)
    const opt = [option1, option2, option3, option4]
    const query = await fetchGraphQl(
      `
    mutation updateQuestion($id: ID, $question: String, $options: [String], $answerID: String) {
      updateQuestion (
        id: $id
        question: $question
        options: $options
        answerID: $answerID
      ){
        id
        question
        options
        answerID
      }
    }
  `,
      {
        id: questionID,
        question: question,
        options: opt,
        answerID: answerID + ''
      }
    )

    if (query.data) {
      Router.push('/viewlist')
    }
  }

  function success(text, ctrl = true) {
    if (ctrl) {
      alert(text)
      setReload(reload + 1)
      setQuestionID('1')
    }

    setQuestion('')
    setOption1('')
    setOption2('')
    setOption3('')
    setOption4('')
    setAnswerID('')
  }

  function answerOpt(event) {
    setAnswerID(event.target.value)
  }

  return (
    <S.Wrapper className="App">
      <form
        id="form-question"
        className="box-div"
        onSubmit={questionID === '' ? createQuestion : updateQuestion}
      >
        <h2>{questionID === '' ? 'Nova Pergunta' : 'Editar Pergunta'}</h2>

        <ul id="question-ul">
          <li id="question-input">
            <input
              placeholder="Escreva sua pergunta"
              required
              id="questionInput"
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </li>
          <li>
            <input
              placeholder="Resposta 1"
              required
              id="questionOption_1"
              type="text"
              value={option1}
              onChange={(event) => setOption1(event.target.value)}
            />
          </li>

          <li>
            <input
              placeholder="Resposta 2"
              required
              id="questionOption_2"
              type="text"
              value={option2}
              onChange={(event) => setOption2(event.target.value)}
            />
          </li>

          <li>
            <input
              placeholder="Resposta 3"
              required
              id="questionOption_3"
              type="text"
              value={option3}
              onChange={(event) => setOption3(event.target.value)}
            />
          </li>

          <li>
            <input
              placeholder="Resposta 4"
              required
              id="questionOption_4"
              type="text"
              value={option4}
              onChange={(event) => setOption4(event.target.value)}
            />
          </li>
        </ul>

        <S.AnswerWrapper>
          <label className="correct" htmlFor="">
            Resposta correta: {answerID}
          </label>
          <S.OptionWrapper
            id="question-answer"
            onChange={(event) => answerOpt(event)}
          >
            <S.OptionInput>
              <label htmlFor="radio">Opção 1</label>
              <input
                type="radio"
                value="1"
                name="answerID"
                checked={answerID === '1'}
              />
            </S.OptionInput>
            <S.OptionInput>
              <label htmlFor="radio">Opção 2</label>
              <input
                type="radio"
                value="2"
                name="answerID"
                checked={answerID === '2'}
              />
            </S.OptionInput>
            <S.OptionInput>
              <label htmlFor="radio">Opção 3</label>
              <input
                type="radio"
                value="3"
                name="answerID"
                checked={answerID === '3'}
              />
            </S.OptionInput>
            <S.OptionInput>
              <label htmlFor="radio">Opção 4</label>
              <input
                type="radio"
                value="4"
                name="answerID"
                checked={answerID === '4'}
              />
            </S.OptionInput>
          </S.OptionWrapper>
        </S.AnswerWrapper>

        <div id="question-footer">
          <S.Button
            type="button"
            onClick={() => success('', false)}
            className="btn-del"
          >
            CANCELAR
          </S.Button>

          <S.Button type="submit" className="btn-edit">
            SALVAR
          </S.Button>
        </div>
      </form>
    </S.Wrapper>
  )
}

export default App
