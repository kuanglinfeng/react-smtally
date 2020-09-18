import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import theme from 'theme'

const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  color: ${theme.color};
  font-size: 14px;
  display:flex;
  align-items: center;justify-content: center;
  flex-direction: column;
  .icon {
    fill: ${theme.color};
    margin-bottom: 20px;
  }
`

export default function () {
  return (
    <Wrapper>
      <Icon name="notFound" />
      <span>这个页面找不到哦！o(╥﹏╥)o</span>
    </Wrapper>
  )
}