import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import theme from 'theme'

export const NoData = styled.div`
  display:flex;
  align-items: center;  
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  color: ${ theme.color };
  height: ${ (props: Props) => props.height || '100%' };
  .icon {
    width: 50px;height: 50px;
    fill: ${ theme.color };
  }
`

type Props = {
  height?: string
}

export default (props: Props) => {
  return (
    <NoData height={ props.height }>
      <Icon name="noData" />
      <span>暂时还没有记录，快去记一笔吧~</span>
    </NoData>
  )
}