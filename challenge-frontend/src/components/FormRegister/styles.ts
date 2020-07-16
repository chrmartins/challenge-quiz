﻿import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
    cursor: pointer
  }

  h2 {
    margin-top: 10px;
    font-size: 2rem;
  }

  li {
    list-style-type: none;
    display: flex;

    input {
      width: 900px;
      height: 35px;
      border-radius: 5px;
      margin: 10px auto;
      font-size: 1.6rem;
      padding: 10px;
    }
  }
`

export const AnswerWrapper = styled.div`
  margin-top: 20px;

  .correct {
    font-size: 2rem;
  }
`

export const OptionWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionInput = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 1.3rem;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
  }

  input {
    margin: 10px 15px;

    font-size: 1.3rem;
  }
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #e0445b;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  border: 0 solid;
  border-radius: 5px;
  align-items: center;
  margin: 25px 10px;
`
