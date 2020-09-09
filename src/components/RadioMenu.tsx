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

type Props = {
  selectList: string[]
  onSelect: (value: string) => void
}

export default (props: Props) => {

  const [text, setText] = useState('')

  const onSelect = (e: any) => {
    setText(e.target.innerText)
    props.onSelect(e.target.innerText)
  }

  return (
    <Wrapper onClick={onSelect}>
      {
        props.selectList.map(item => {
          return <button key={item} className={text === item ? 'active' : ''}>{item}</button>
        })
      }
    </Wrapper>
  )
}