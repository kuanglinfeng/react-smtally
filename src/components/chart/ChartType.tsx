import React from 'react'
import styled from 'styled-components'
import RadioMenu from 'components/RadioMenu'
import theme from 'theme'

const Wrapper = styled.div`
  padding: 10px 0;
  display:flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid ${theme.color};
    background: #fff;
    > button {
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
      <RadioMenu values={props.values} onSelect={props.onSelect} />
    </Wrapper>
  )
}