import React, { useState } from 'react'
import Layout from 'components/Layout'
import LineChart from 'components/chart/LineChart'
import PieChart from 'components/chart/PieChart'
import Header from 'components/chart/Header'
import dayjs from 'dayjs'
import ChartType from 'components/chart/ChartTypes'
import AmountTypes from 'components/chart/AmountTypes'
import useChartData from 'hooks/useChartData'

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
  const [amountType, setAmountType] = useState<AmountType>('-')
  const [chartType, setChartType] = useState('流水')
  const { getDaysInMonthAmount, getTotalAmountOfMonth } = useChartData()

  const onMonthChange = (month: number) => {
    setMonth(month)
    console.log(month)
  }

  const onChartTypeSelect = (value: string) => {
    setChartType(value)
  }

  const onAmountTypeSelect = (type: AmountType) => {
    setAmountType(type)
  }

  return (
    <Layout>
      <div>
        <Header year={ dayjs().year() } month={ month } onMonthChange={ onMonthChange } />
        <ChartType values={ ['流水', '分类'] } onSelect={ onChartTypeSelect } />
        <AmountTypes
          incomeAmount={ getTotalAmountOfMonth(dayjs().year(), month).income }
          outlayAmount={ getTotalAmountOfMonth(dayjs().year(), month).outlay }
          onTypeSelect={ onAmountTypeSelect }
        />
        {
          chartType === '流水' ?
            <LineChart
              xData={ Object.keys(getDaysInMonthAmount(dayjs().year(), month, amountType)) }
              yData={ Object.values(getDaysInMonthAmount(dayjs().year(), month, amountType)) }
            /> :
            <PieChart data={ data } />
        }
      </div>
    </Layout>
  )
}