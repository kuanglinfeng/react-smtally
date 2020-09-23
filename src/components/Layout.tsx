import React, { Props } from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  > div {
    flex-grow: 1;
    height: 100vh;
    overflow: auto;
  }
`

export default (props: Props<null> ) => {
  return (
    <Wrapper>
      { props.children }
      <Nav />
    </Wrapper>
  )
}