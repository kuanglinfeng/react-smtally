import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import SelectMonth from 'components/SelectMonth'
import theme from 'theme'

export const Header = styled.div`
  padding: 8px 12px;
  display:flex;
  justify-content: space-between;
  .icon {
    width: 30px;  height: 30px;
    padding: 5px;
    fill: #fff;
  }
  background: ${ theme.color };
  color: #fff;
  font-size: 14px;
`

const YearAndMonth = styled.div`
  display:flex;
  align-items: center;
  .icon {
    width: 20px; height: 20px;
    padding: 3px;
  }
  .selectMonth {
    display:flex;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
    }
  }
`
export const Empty = styled.div`
  width: 30px;  height: 30px;
`

type Props = {
  year: number
  month: number
  onMonthChange: (month: number) => void
}

export default (props: Props) => {

  const history = useHistory()

  const [month, setMonth] = useState(props.month)

  const onMonthChange = (value: number) => {
    setMonth(value)
    props.onMonthChange(value)
  }

  return (
    <Header>
      <Icon name="back" onClick={ () => history.goBack() } />
      <YearAndMonth>
        { props.year }年
        <SelectMonth className="selectMonth" month={ month } onMonthChange={ onMonthChange } />
      </YearAndMonth>
      <Empty />
    </Header>
  )
}