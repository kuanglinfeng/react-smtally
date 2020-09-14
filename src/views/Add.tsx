import React, { useState } from 'react'
import styled from 'styled-components'
import Header from 'components/add/Header'
import Keyboard from 'components/add/Keyboard'
import AmountShow from 'components/add/AmountShow'
import UserTags from 'components/add/UserTags'
import useRecords from 'hooks/useRecords'
import { useHistory } from 'react-router-dom'

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
  const [tag, setTag] = useState()
  const { add } = useRecords()

  const history = useHistory()

  const onTypeSelect = (value: string) => {
    setTypeValue(value === '支出' ? '-' : '+')
  }

  const onTagSelect = (tag: TagItem) => {
    setTag(tag)
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
    add({ type: typeValue, tag: tag, date: date, remark: remark, amount: amount })
    // 路由跳转到 /bill
    history.push('/bill')
  }

  return (
    <Wrapper>
      <Header onSelect={ onTypeSelect } values={ ['支出', '收入'] } />
      <UserTags type={ typeValue } onSelect={ onTagSelect } />
      <AmountShow amount={ amount } onDateSelect={ onDateSelect } onRemarkChange={ onRemarkChange } />
      <Keyboard onAmountChange={ onAmountChange } onSubmit={ onSubmit } />
    </Wrapper>
  )
}