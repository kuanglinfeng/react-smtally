import React from 'react'
import styled from 'styled-components'
import RadioMenu from '../RadioMenu'
import theme from '../../theme'
import Icon from '../Icon'
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
    color: #fff;
    padding: 5px;
  }
`

type Props = {
  onSelect: (value: string) => void
}

export default (props: Props) => {

  const history = useHistory()
  return (
    <Header>
      <Icon name="back" onClick={() => history.goBack()}/>
      <RadioMenu values={['支出', '收入']} onSelect={props.onSelect}/>
      <span>保存</span>
    </Header>
  )
}