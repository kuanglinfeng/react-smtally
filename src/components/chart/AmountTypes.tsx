import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from 'theme'

const Wrapper = styled.div`
  padding: 10px;
  font-size: 12px;
  color: #6E6E6E;
  .circle {
    display: inline-block;
    width: 9px; height: 9px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid;
  }
  > div {
    margin: 0 10px;
    > span {
      margin-left: 10px;
    }
  }
`

const Outlay = styled.div`
  display: inline-block;
  > .circle {
    border-color: red;
    &.active {
      background: #FF9EB4;
    }
  }
`

const Income = styled.div`
  display: inline-block;
  > .circle {
    border-color: green;
    &.active {
      background: ${ theme.color };
    }
  }
`

export type AmountTypeProps = {
  outlayAmount: number
  incomeAmount: number
  onTypeSelect: (type: AmountType) => void
}

export default (props: AmountTypeProps) => {

  const [amountType, setAmountType] = useState<AmountType>('-')

  useEffect(() => {
    // 使初始化时父组件也能触发on select
    props.onTypeSelect('-')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onOutlaySelect = () => {
    if (amountType === '-') return
    setAmountType('-')
    props.onTypeSelect('-')
  }

  const onIncomeSelect = () => {
    if (amountType === '+') return
    setAmountType('+')
    props.onTypeSelect('+')
  }

  return (
    <Wrapper>
      <Outlay>
        <div
          className={ `circle ${ amountType === '-' ? 'active' : '' }` }
          onClick={ onOutlaySelect }
        />
        <span>支出:{ props.outlayAmount.toFixed(2) }</span>
      </Outlay>
      <Income>
        <div
          className={ `circle ${ amountType === '+' ? 'active' : '' }` }
          onClick={ onIncomeSelect }
        />
        <span>收入:{ props.incomeAmount.toFixed(2) }</span>
      </Income>
    </Wrapper>
  )
}