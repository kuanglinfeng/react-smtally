import React, { useState } from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import SelectMonth from 'components/SelectMonth'

const Wrapper = styled(Header)`
  padding-top: 20px;
  color: #fff;
  font-size: 12px;
  .icon {
    width: 16px;  height: 16px;
    padding: 3px;
    margin-bottom: -2px;
  }
`
const Date = styled.div`
  padding: 0 18px;
  width: 35%;
  border-right: 1px dashed #fff;
  display: flex;
  flex-direction: column;
  > div {
     > div {
      display:flex;
      align-items: center;
      height: 38px;
      > span {
        font-size: 24px;
      }
    }
  }
`

const Total = styled.div`
  display: flex;
  width: 100%;
  > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    > div {
      padding: 10px 0;
    }
  }
`

type Props = {
  income: number
  outlay: number
  year: number
  month: number
  onMonthChange: (month: number) => void
}

export default (props: Props) => {

  const [month, setMonth] = useState(props.month)

  const onMonthChange = (value: number) => {
    setMonth(value)
    props.onMonthChange(value)
  }

  return (
    <Wrapper>
      <Date>
        <span>{ props.year }年</span>
        <SelectMonth month={month} onMonthChange={onMonthChange} />
      </Date>
      <Total>
        <div>
          <span>收入</span>
          <div>{props.income.toFixed(2)}</div>
        </div>
        <div>
          <span>支出</span>
          <div>{props.outlay.toFixed(2)}</div>
        </div>
      </Total>
    </Wrapper>
  )
}