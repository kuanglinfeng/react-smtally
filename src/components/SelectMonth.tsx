import React, { useState } from 'react'
import { Picker } from 'antd-mobile'
import getPickerMonths from 'constants/getPickerMonths'
import Icon from 'components/Icon'

type Props = {
  month: number
  onMonthChange: (month: number) => void
  className?: string
}

export default (props: Props) => {

  const [month, setMonth] = useState(props.month)

  const onPickerChange = (value: any) => {
    const m = parseInt(value[0])
    props.onMonthChange(m)
    setMonth(m)
  }

  return (
    <Picker
      data={ getPickerMonths() }
      title="选择月份" cols={ 1 }
      value={ [month.toString()] }
      onChange={ onPickerChange }
    >
      <div className={props.className}>
        <span>{ month }</span>
        <div>月<Icon name="down" /></div>
      </div>
    </Picker>
  )
}