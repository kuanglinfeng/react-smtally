import React from 'react'
import styled from 'styled-components'
import DatePicker from '../DatePicker'
import Remark from '../Remark'
import theme from '../../theme'

const Wrapper = styled.div`
  border: 1px solid red;
`

const Amount = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${theme.color};
  display: inline-block;
  float: right;
  padding: 14px 5px;
`

type Props = {
  amount: string
}

export default (props: Props) => {

  const onRecordDateSelect = (date: Date) => {
    console.log(date)
  }

  const onRecordRemarkChange = (value: string) => {
    console.log(value)
  }

  return (
    <Wrapper>
      <DatePicker onSelect={onRecordDateSelect} />
      <Remark onChange={onRecordRemarkChange}/>
      <Amount>{'￥' + props.amount}</Amount>
    </Wrapper>
  )
}