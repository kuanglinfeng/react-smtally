import React from 'react'
import RadioMenu from 'components/RadioMenu'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  border: 1px solid red;
`

export default function () {

  const types = ['支出', '收入', '其它']

  const onSelect = (value: string) => {
    console.log(value)
  }

  return (
    <Wrapper>
      记账页
      <RadioMenu selectList={types} onSelect={onSelect}/>
    </Wrapper>
  )
}