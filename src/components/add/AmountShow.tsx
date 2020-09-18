import React, { useEffect } from 'react'
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
  padding: 14px 10px 15px 0;
`

type Props = {
  amount: string
  defaultDate?: Date
  defaultRemark?: string
  onDateSelect: (date: Date) => void
  onRemarkChange: (remark: string) => void
}

export default (props: Props) => {

  const onDateSelect = (date: Date) => {
    props.onDateSelect(date)
  }

  const onRemarkChange = (value: string) => {
    props.onRemarkChange(value)
  }

  useEffect(() => {
    if (props.defaultRemark) {
      props.onRemarkChange(props.defaultRemark)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <DatePicker defaultDate={props.defaultDate} onSelect={onDateSelect} />
      <Remark defaultValue={props.defaultRemark} onChange={onRemarkChange}/>
      <Amount>{'￥' + props.amount}</Amount>
    </Wrapper>
  )
}