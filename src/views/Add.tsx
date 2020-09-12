import React, { useState } from 'react'
import styled from 'styled-components'
import Header from 'components/add/Header'
import Keyboard from 'components/add/Keyboard'
import AmountShow from 'components/add/AmountShow'
import UserTags from 'components/add/UserTags'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function () {

  const [typeValue, setTypeValue] = useState<'-' | '+'>('-')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [remark, setRemark] = useState('')

  const onTypeSelect = (value: string) => {
    setTypeValue(value === '支出' ? '-' : '+')
  }

  const onTagSelect = (tag: TagItem) => {
    console.log(tag.title)
  }


  const onAmountChange = (amount: string) => {
    setAmount(amount)
  }

  const onDateSelect = (date: Date) => {
    setDate(date)
  }

  const onRemarkChange = (remark: string) => {
    setRemark(remark)
  }

  const onSubmit = (amount: number) => {
    console.log('类型：', typeValue)
    console.log('日期：', date)
    console.log('备注：', remark)
    console.log('金额：', amount)
  }

  return (
    <Wrapper>
      <Header onSelect={onTypeSelect} values={['支出', '收入']} defaultValue={'支出'}/>
      <UserTags type={typeValue} onSelect={onTagSelect} />
      <AmountShow amount={amount} onDateSelect={onDateSelect} onRemarkChange={onRemarkChange} />
      <Keyboard onValueChange={onAmountChange} onSubmit={onSubmit} />
    </Wrapper>
  )
}