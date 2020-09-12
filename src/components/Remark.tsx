import { Modal } from 'antd-mobile'
import React, { useState } from 'react'
import styled from 'styled-components'

const prompt = Modal.prompt

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px 5px;
  font-size: 14px;
`
const Title = styled.span``

const Input = styled.input`
  overflow:hidden; white-space:nowrap; text-overflow:ellipsis;
  height: 30px;
  background: inherit;
  width: 25vw;
  border: none;
  &:focus {
    outline: none;
  }
`

type Props = {
  onChange: (value: string) => void
}

export default (props: Props) => {

  const [value, setValue] = useState('')

  const inputChange = (e: any) => {
    setValue(value)
  }

  const handleInputClick = (value: string) => {
    return () => prompt('请输入备注', '',
      [
        { text: '取消' },
        {
          text: '确认',
          onPress: value => new Promise((resolve) => {
            setValue(value)
            props.onChange(value)
            resolve()
          }),
        },
      ], 'default', value, ['输入您的备注'])
  }

  return (
    <Wrapper>
      <Title>备注：</Title>
      <Input onChange={inputChange} value={value} onClick={ handleInputClick(value) }
      />
    </Wrapper>

  )
}