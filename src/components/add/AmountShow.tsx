import React from 'react'
import styled from 'styled-components'
import DatePicker from '../DatePicker'

const Wrapper = styled.div`
  border: 1px solid red;
`

export default () => {

  const onRecordDateSelect = (date: Date) => {
    console.log(date)
  }

  return (
    <Wrapper>
      <DatePicker onSelect={onRecordDateSelect} />
    </Wrapper>
  )
}