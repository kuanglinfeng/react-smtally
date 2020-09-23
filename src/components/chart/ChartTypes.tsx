import React from 'react'
import styled from 'styled-components'
import RadioMenu from 'components/RadioMenu'
import theme from 'theme'

const Wrapper = styled.div`
  display:flex;
  font-size: 14px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  > div {
    width: 40%;
    border: 1px solid ${ theme.color };
    background: #fff;
    > button {
       padding: 0;
       color: ${ theme.color };
       &.active {
        background: ${ theme.color };
        color: #fff;
      }
    }
  }
`

type ChartTypeProps = {
  values: string[]
  onSelect: (value: string) => void
}

export default (props: ChartTypeProps) => {

  return (
    <Wrapper>
      <RadioMenu values={ props.values } onSelect={ props.onSelect } />
    </Wrapper>
  )
}