import React from 'react'
import styled from 'styled-components'
import { IconWrapper } from 'components/add/UserTags'
import Icon from 'components/Icon'

const Wrapper = styled.div`
  padding: 5px 8px;
  flex-grow: 234;
  overflow: auto;
`

const Title = styled.div`
  margin: 5px 0;
  font-size: 12px;
  color: #757575;
`

const RankList = styled.ul`
  overflow: auto;
`

const RankItem = styled.li`
  padding: 8px 0;
  display:flex;
  border-radius: 4px;
  &:active {
    background: #E0E0E0;
  }
`

const IconContainer = styled(IconWrapper)`
   margin: 0;
   padding: 0;
   background: ${(props: IconWrapperProps) => props.backgroundColor};
   width: 30px; height: 30px;
  .icon {
    fill: #fff;
    width: 24px;  height: 24px;
  }
`

const RankContent = styled.div`
  flex-grow: 909;
  display:flex;
  margin: 4px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  > p {
    color: #787878;
    > span {
      float: left;
      margin-left: 6px;
      &:last-child {
        float: right;
        color: #D47B81;
        margin-right: 6px;
      }
    }
  }
`

type ProportionBarProps = {
  percentage: number
}

const ProportionBar = styled.div`
  background: #E0E0E0;
  height: 4px;
  border-radius: 2px;
  position: relative;
  &:after {
    position: absolute;
    left: 0; top: 0;
    content: '';
    display: inline-block;
    height: 4px;
    border-radius: 2px;
    background: #D47B81;
    width: ${(props: ProportionBarProps) => props.percentage * 100 + '%'};
  }
`

export default () => {

  return (
    <Wrapper>
      <Title>支出排行榜</Title>
      <RankList>
        <RankItem>
          <IconContainer backgroundColor="#55C6B2">
            <Icon name="game" />
          </IconContainer>
          <RankContent>
            <p>
              <span>游戏</span>
              <span>2笔</span>
              <span>56.4%</span>
              <span>150</span>
            </p>
            <ProportionBar percentage={0.2} />
          </RankContent>
        </RankItem>
      </RankList>
    </Wrapper>
  )
}