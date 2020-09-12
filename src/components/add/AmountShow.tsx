import React from 'react'
import styled from 'styled-components'
import DatePicker from 'components/DatePicker'
import Remark from 'components/Remark'
import theme from 'theme'

const Wrapper = styled.div``
const Amount = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${theme.color};
  display: inline-block;
  float: right;
  height: 52px;
  padding: 14px 5px;
`

type Props = {
  amount: string
  onDateSelect: (date: Date) => void
  onRemarkChange: (remark: string) => void
}

export default (props: Props) => {

  const onRecordDateSelect = (date: Date) => {
    props.onDateSelect(date)
  }

  const onRecordRemarkChange = (value: string) => {
    props.onRemarkChange(value)
  }

  return (
    <Wrapper>
      <DatePicker onSelect={onRecordDateSelect} />
      <Remark onChange={onRecordRemarkChange}/>
      <Amount>{'￥' + props.amount}</Amount>
    </Wrapper>
  )
}