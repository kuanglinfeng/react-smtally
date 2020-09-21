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
      background: ${theme.color};
    }
  }
`

export type AmountType = 'outlay' | 'income'

type AmountTypeProps = {
  outlayAmount: number
  incomeAmount: number
  onTypeSelect: (type: AmountType) => void
}

export default (props: AmountTypeProps) => {

  const [amountType, setAmountType] = useState<AmountType>('outlay')

  useEffect(() => {
    // 使初始化时父组件也能触发on select
    props.onTypeSelect('outlay')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onOutlaySelect = () => {
    setAmountType('outlay')
    props.onTypeSelect('outlay')
  }

  const onIncomeSelect = () => {
    setAmountType('income')
    props.onTypeSelect('income')
  }

  return (
    <Wrapper>
      <Outlay>
        <div
          className={`circle ${amountType === 'outlay' ? 'active' : ''}`}
          onClick={onOutlaySelect}
        />
        <span>支出:{props.outlayAmount.toFixed(2)}</span>
      </Outlay>
      <Income>
        <div
          className={`circle ${amountType === 'income' ? 'active' : ''}`}
          onClick={onIncomeSelect}
        />
        <span>收入:{props.incomeAmount.toFixed(2)}</span>
      </Income>
    </Wrapper>
  )
}