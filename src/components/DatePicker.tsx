import { DatePicker } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from 'theme'
import dayjs from 'dayjs'

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px;
  background: ${ theme.fadeColor };
  .icon {
    width: 40px;height: 40px;
  }
`
const Calendar = styled.div`
  position: relative;
  width: 32px;  height: 32px;
  background: #CDF9EA;
  opacity: 1;
  border-radius: 4px;
  border: 2px solid ${ theme.color };
  color: ${ theme.color };
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  &::before {
    position: absolute;
    content: '';
    display:block;
    width: 2px; height: 6px;
    background: ${ theme.color };
    top: -3px; left: 8px;
  }
  &::after {
    position: absolute;
    content: '';
    display:block;
    width: 2px; height: 6px;
    background: ${ theme.color };
    top: -3px; right: 8px;
  }
`

type Props = {
  defaultDate?: Date
  onSelect: (value: any) => void
}

export default (props: Props) => {

  const [date, setDate] = useState(new Date(dayjs().toString()))

  useEffect(() => {
    if (props.defaultDate) {
      setDate(props.defaultDate)
      props.onSelect(props.defaultDate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <DatePicker
        mode="date"
        title="选择日期"
        extra="Optional"
        value={ date }
        onChange={ date => {
          setDate(date)
          props.onSelect(date)
        } }
      >
        <Calendar>{ dayjs(date).date() }</Calendar>
      </DatePicker>
    </Wrapper>
  )
}