import styled from 'styled-components'

export const Bill = styled.div`
  display:flex;
  flex-direction: column;
`

export const IconWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 35px; width: 35px;  
  border-radius: 50%;
  background: ${(props: IconWrapperProps) => props.backgroundColor};
  .icon {
    width: 25px;  height: 25px;
    fill: #fff;
  }
`

export const DateList = styled.ul`
  height: 100%;
  overflow: auto;
`
export const DateItem = styled.li``

export const RecordList = styled.ul`
  padding: 0 20px;
  font-size: 14px;
`
export const RecordItem = styled.li`
  border-bottom: 1px solid #EDEDED;
  &:last-child {
    border:none;
  }
  &:first-child {
    border-bottom: 1px solid #EDEDED;
  }
  overflow: hidden;
  padding: 10px 0;
  > .tag {
    float: left;
    display:flex;
    align-items: center;
    > div.remarkWrapper {
      margin-left: 10px;
      display:flex;
      flex-direction: column;
      color: #797979;
      > span {
        &.remark {
          font-size: 12px;
          color: #A7A7A7;
        }
      }
    }
  }
  > .amount {
    line-height: 34px;
    height: 34px;
    float: right;
    color: #E58580;
  }
`

export const Title = styled.div`
  padding: 6px 16px;
  color: #949494;
  overflow: hidden;
  background: #F7F9F8;
  font-size: 12px;
`

export const Date = styled.div`
  float: left;
`

export const TotalAmount = styled.div`
  float: right;
  > span {
    margin-left: 8px;
  }
`