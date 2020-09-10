import React from 'react'
import styled from 'styled-components'
import Header from '../components/add/Header'
import Keyboard from '../components/Keyboard'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function () {

  const onRecordTypeSelect = (value: string) => {
    console.log(value)
  }

  return (
    <Wrapper>
      <Header onSelect={onRecordTypeSelect}/>
      <Keyboard />
    </Wrapper>
  )
}