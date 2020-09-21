import React, { useState } from 'react'
import Layout from 'components/Layout'
import LineChart from 'components/chart/LineChart'
import PieChart from 'components/chart/PieChart'
import Header from 'components/chart/Header'
import dayjs from 'dayjs'
import ChartType from 'components/chart/ChartTypes'
import AmountTypes, { AmountType } from 'components/chart/AmountTypes'

var data = [{
  name: '餐饮',
  value: 70
}, {
  name: '水电',
  value: 68
}, {
  name: '购物',
  value: 48
}, {
  name: '游戏',
  value: 40
}, {
  name: '旅游',
  value: 32
}, {
  name: '小吃',
  value: 27
}, {
  name: '医疗',
  value: 18
}]

export default function () {

  const [month, setMonth] = useState(dayjs().month() + 1)
  const setChartTypeValue = useState('')[1]

  const onMonthChange = (month: number) => {
    setMonth(month)
    console.log(month)
  }

  const onChartTypeSelect = (value: string) => {
    setChartTypeValue(value)
    console.log(value)
  }

  const onAmountTypeSelect = (amountType: AmountType) => {
    console.log(amountType)
  }

  return (
    <Layout>
      <div>
        <Header year={ dayjs().year() } month={ month } onMonthChange={ onMonthChange } />
        <ChartType values={ ['流水', '分类'] } onSelect={ onChartTypeSelect } />
        <AmountTypes incomeAmount={ 983 } outlayAmount={ 324 } onTypeSelect={ onAmountTypeSelect } />
        <LineChart xData={ ['1', '2', '3'] } yData={ [200, 100, 300] } />
        <PieChart data={ data } />
      </div>
    </Layout>
  )
}