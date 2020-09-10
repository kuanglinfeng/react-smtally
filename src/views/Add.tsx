import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/add/Header'
import Keyboard from '../components/Keyboard'
import AmountShow from '../components/add/AmountShow'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function () {

  const [amount, setAmount] = useState('')

  const onRecordTypeSelect = (value: string) => {
    console.log(value)
  }

  const onRecordAmountChange = (amount: string) => {
    setAmount(amount)
  }

  const onRecordAmountSubmit = (amount: number) => {
    console.log(amount)
  }

  // const onRecordDateSelect = (date: Date) => {
  //   console.log(date)
  // }

  return (
    <Wrapper>
      <Header onSelect={onRecordTypeSelect}/>
      <AmountShow amount={amount} />
      <Keyboard onValueChange={onRecordAmountChange} onSubmit={onRecordAmountSubmit} />
    </Wrapper>
  )
}