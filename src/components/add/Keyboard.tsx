import React, { SyntheticEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Toast } from 'antd-mobile'
import Icon from 'components/Icon'
import theme from 'theme'

const Wrapper = styled.div`
  width: 100%;
    > button {
      display:flex;
      align-items: center;
      justify-content: center;
      float: left;
      font-size: 20px;
      padding: 4px 8px;
      width: 25%;
      box-shadow: 0 0 1px rgba(0, 0, 0, .25);
      height: 54px;
      &:active {
       background: #ccc;
       opacity: .6;
      }
      &.save {
        height: 108px;
        float: right;
        color: #fff;
        background: ${ theme.color };
        &:active {
          opacity: .7;
        }
      }
      > .icon {
        width: 20px; height: 20px;
      }
    }
`

type Props = {
  defaultAmount?: string
  onAmountChange: (amount: string) => void
  onSubmit: (amount: number) => void
}

export default (props: Props) => {

  const [amount, setAmount] = useState(props.defaultAmount ? props.defaultAmount : '0')
  const [adding, setAdding] = useState(false)
  const [subtracting, setSubtracting] = useState(false)
  const [firstAmount, setFirstAmount] = useState('0')
  const [secondAmount, setSecondAmount] = useState('0')

  useEffect(() => {
    props.onAmountChange(amount)
  }, [props, amount])

  const save = () => {
    if (adding) {
      const totalAmount = parseFloat(firstAmount) + parseFloat(secondAmount)
      setAmount(totalAmount + '')
      setFirstAmount(totalAmount + '')
      setSecondAmount('0')
      setAdding(false)
    } else if (subtracting) {
      const totalAmount = parseFloat(firstAmount) - parseFloat(secondAmount)
      setAmount(totalAmount + '')
      setFirstAmount(totalAmount + '')
      setSecondAmount('0')
      setSubtracting(false)
    } else {
      const formatAmount = parseFloat(parseFloat(amount).toFixed(2))
      if (formatAmount < 0) {
        Toast.info('请输入正确的金额哦！', 2)
      } else {
        props.onSubmit(formatAmount)
        clear()
      }
    }
  }

  const onNumberClick = (e: SyntheticEvent) => {
    const button = e.target as HTMLButtonElement
    const inputValue = button.textContent || '0'
    // 如果已经是个小数了，且小数点后面有两位了，则不允许再叠加数字
    if (amount.indexOf('.') !== -1 && amount.split('.')[1].length === 2) return
    if (amount.length === 12) return
    // 开启计算模式
    if (adding || subtracting) {
      setSecondAmount(secondAmount === '0' ? inputValue : secondAmount + inputValue)
      setAmount(amount + inputValue)
      return
    }
    if (amount !== '0' && amount.indexOf('.') >= 0 && inputValue === '.') return
    if (amount === '0' && inputValue === '.') {
      setAmount(amount + inputValue)
    } else if (amount === '0' && inputValue !== '.') {
      setAmount(inputValue)
    } else {
      setAmount(amount + inputValue)
    }
  }

  const clear = () => {
    setAdding(false)
    setSubtracting(false)
    setFirstAmount('0')
    setSecondAmount('0')
    setAmount('0')
  }

  const onAdd = () => {
    if (amount === '0') return
    if (subtracting) {
      let total = parseFloat(firstAmount) - parseFloat(secondAmount)
      setAmount(total + '+')
      setFirstAmount(total + '')
      setSecondAmount('0')
      setSubtracting(false)
      setAdding(true)
      return
    }
    if (adding) {
      let total = parseFloat(firstAmount) + parseFloat(secondAmount)
      setAmount(total + '+')
      setFirstAmount(total + '')
      setSecondAmount('0')
    } else {
      setAdding(true)
      setFirstAmount(parseFloat(amount).toFixed(2))
      setAmount(amount + '+')
    }
  }

  const onSubtract = () => {
    if (amount === '0') return
    if (adding) {
      let total = parseFloat(firstAmount) + parseFloat(secondAmount)
      setAmount(total + '-')
      setFirstAmount(total + '')
      setSecondAmount('0')
      setAdding(false)
      setSubtracting(true)
      return
    }
    if (subtracting) {
      let total = parseFloat(firstAmount) - parseFloat(secondAmount)
      setAmount(total + '-')
      setFirstAmount(total + '')
      setSecondAmount('0')
    } else {
      setSubtracting(true)
      setFirstAmount(parseFloat(amount).toFixed(2))
      setAmount(amount + '-')
    }
  }

  return (
    <Wrapper>
      <button onClick={ onNumberClick }>1</button>
      <button onClick={ onNumberClick }>2</button>
      <button onClick={ onNumberClick }>3</button>
      <button onClick={ onAdd }>+</button>
      <button onClick={ onNumberClick }>4</button>
      <button onClick={ onNumberClick }>5</button>
      <button onClick={ onNumberClick }>6</button>
      <button onClick={ onSubtract }>-</button>
      <button onClick={ onNumberClick }>7</button>
      <button onClick={ onNumberClick }>8</button>
      <button onClick={ onNumberClick }>9</button>
      <button className='save' onClick={ save }>{ adding || subtracting ? '=' : '保存' }</button>
      <button onClick={ onNumberClick }>.</button>
      <button onClick={ onNumberClick }>0</button>
      <button onClick={ clear }>
        <Icon name="clear" />
      </button>
    </Wrapper>
  )
}