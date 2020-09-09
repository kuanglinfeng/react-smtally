import React from 'react'
import styled from 'styled-components'
import Header from '../components/add/Header'

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 100vh;
`

export default function () {

  const onRecordTypeSelect = (value: string) => {
    console.log(value)
  }

  return (
    <Wrapper>
      <Header onSelect={onRecordTypeSelect}/>
    </Wrapper>
  )
}