import React from 'react'
import styled from 'styled-components'
import RadioMenu, { RadioMenuProps } from 'components/RadioMenu'
import theme from 'theme'
import Icon from 'components/Icon'
import {useHistory} from 'react-router-dom'

const Header = styled.header`
  padding: 13px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.color};
  font-size: 14px;
  .icon {
    width: 30px;  height: 30px;
    fill: #fff;
    padding: 5px;
  }
  > span {
    display: inline-block;
    color: #fff;
    width: 30px;height: 30px;
  }
`

export default (props: RadioMenuProps) => {

  const history = useHistory()
  return (
    <Header>
      <Icon name="back" onClick={() => history.goBack()}/>
      <RadioMenu values={props.values} onSelect={props.onSelect} defaultValue={props.defaultValue}/>
      <span />
    </Header>
  )
}