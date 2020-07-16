﻿import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin-top: 80px;
    list-style-type: none;

    li {
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
    }
  }
`

export const Button = styled.button`
  width: 90px;
  height: 30px;
  background-color: #e0445b;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  border: 0 solid;
  border-radius: 5px;
  align-items: center;
  margin: 10px 10px 35px 10px;
`
