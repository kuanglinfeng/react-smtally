import React, { useState } from 'react'
import styled from 'styled-components'
import theme from 'theme'

const Wrapper = styled.div`
  border: 1px solid #fff;
  width: 60%;
  border-radius: 4px;
  background: ${ theme.color };
  color: #fff;
  display:flex;
  > button {
   padding: 4px 0;
   display:flex;
   align-items: center;
   justify-content: center;
   flex-grow: 1;
   &.active {
      color: ${ theme.color };
      background: #fff;
    }
  }
`

export type RadioMenuProps = {
  defaultValue?: string
  values: string[]
  onSelect: (value: string) => void
}

export default (props: RadioMenuProps) => {

  const [text, setText] = useState(props.defaultValue ? props.defaultValue : props.values[0])

  const onSelect = (e: any) => {
    setText(e.target.innerText)
    props.onSelect(e.target.innerText)
  }

  return (
    <Wrapper onClick={ onSelect }>
      {
        props.values.map(value => {
          return <button key={ value } className={ text === value ? 'active' : '' }>{ value }</button>
        })
      }
    </Wrapper>
  )
}