import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import Header from 'components/Header'
import Icon from 'components/Icon'
import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
`

const Button = styled.div`
  font-size: 16px;
  color: #fff;
  padding-right: 5px;
`

export default () => {

  const location = useLocation()
  const history = useHistory()
  const parsed = queryString.parse(location.search)

  console.log(parsed.type)

  return (
    <Wrapper>
      <Header>
        <Icon name="back" onClick={() => history.goBack()}/>
        <Button>确定</Button>
      </Header>
      标签页
    </Wrapper>
  )
}