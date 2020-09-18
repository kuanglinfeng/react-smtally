import React from 'react'
import Icon from 'components/Icon'
import styled from 'styled-components'
import theme from 'theme'

const NoData = styled.div`
  display:flex;
  align-items: center;  
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  color: ${theme.color};
  height: 100%;
  .icon {
    width: 50px;height: 50px;
    fill: ${theme.color};
  }
`

export default () => {
  return <NoData>
    <Icon name="noData" />
    <span>暂时还没有记录，快去记一笔吧~</span>
  </NoData>
}