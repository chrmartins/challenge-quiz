﻿import styled from 'styled-components'

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`
export const Buttons = styled.button`
  width: 300px;
  height: 50px;
  background-color: #e0445b;
  color: #fff;
  font-size: 1.8rem;
  border: 0 solid;
  border-radius: 15px;
  margin: 0 40px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #c65568;
  }
`
