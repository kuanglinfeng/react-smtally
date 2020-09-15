import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Icon from 'components/Icon'
import { Picker } from 'antd-mobile'
import { PickerData } from 'antd-mobile/es/picker/PropsType'

const Wrapper = styled(Header)`
  padding-top: 20px;
  color: #fff;
  font-size: 12px;
  .icon {
    width: 16px;  height: 16px;
    padding: 3px;
    margin-bottom: -2px;
  }
`
const Date = styled.div`
  padding: 0 18px;
  width: 35%;
  border-right: 1px dashed #fff;
  display: flex;
  flex-direction: column;
  > div {
     > div {
      display:flex;
      align-items: center;
      height: 38px;
      > span {
        font-size: 24px;
      }
    }
  }
`

const Total = styled.div`
  display: flex;
  width: 100%;
  > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    > div {
      padding: 10px 0;
    }
  }
`

type Props = {
  income: number
  outlay: number
  year: number
  month: number
  onMonthChange: (month: number) => void
}

export default (props: Props) => {

  const [month, setMonth] = useState(props.month)

  const createPickerData = () => {
    const data: PickerData[] = []
    for (let i = 1; i < 13; i++) {
      data.push({ label: i.toString(), value: i.toString() })
    }
    return data
  }

  useEffect(() => {
    props.onMonthChange(month)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month])

  const onPickerChange = (value: any) => {
    setMonth(parseInt(value[0]))
  }

  return (
    <Wrapper>
      <Date>
        <span>{ props.year }年</span>
        <Picker data={ createPickerData() } title="选择月份" cols={ 1 } value={ [month.toString()] } onChange={ onPickerChange }>
          <div>
              <span>
                { month }
              </span>
            <div>月<Icon name="down" /></div>
          </div>
        </Picker>
      </Date>
      <Total>
        <div>
          <span>收入</span>
          <div>{props.income.toFixed(2)}</div>
        </div>
        <div>
          <span>支出</span>
          <div>{props.outlay.toFixed(2)}</div>
        </div>
      </Total>
    </Wrapper>
  )
}