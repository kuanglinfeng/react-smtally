import React, { useState } from 'react'
import Layout from 'components/Layout'
import LineChart from 'components/chart/LineChart'
import PieChart from 'components/chart/PieChart'
import Header from 'components/chart/Header'
import dayjs from 'dayjs'

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

  const onMonthChange = (month: number) => {
    setMonth(month)
    console.log(month)
  }

  return (
    <Layout>
      <div>
        <Header year={dayjs().year()} month={month} onMonthChange={onMonthChange} />
        <LineChart xData={ ['1', '2', '3'] } yData={ [200, 100, 300] } />
        <PieChart data={ data } />
      </div>
    </Layout>
  )
}