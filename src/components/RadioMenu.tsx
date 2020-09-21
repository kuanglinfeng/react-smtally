import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from 'theme'

const Wrapper = styled.div`
  border: 1px solid #fff;
  width: 40%;
  border-radius: 4px;
  background: #fff;
  color: ${theme.color};
  display:flex;
  > button {
   font-size: 14px;
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

  const [text, setText] = useState(props.values[0])

  useEffect(() => {
    if (props.defaultValue) {
      setText(props.defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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