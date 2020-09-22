import React, { useState } from 'react'
import Layout from 'components/Layout'
import LineChart from 'components/chart/LineChart'
import PieChart from 'components/chart/PieChart'
import Header from 'components/chart/Header'
import dayjs from 'dayjs'
import ChartType from 'components/chart/ChartTypes'
import AmountTypes from 'components/chart/AmountTypes'
import useChartData from 'hooks/useChartData'
import useRecordsHandler from 'hooks/useRecordsHandler'
import NoData from 'components/NoData'

export default function () {

  const [month, setMonth] = useState(dayjs().month() + 1)
  const [amountType, setAmountType] = useState<AmountType>('-')
  const [chartType, setChartType] = useState('流水')
  const { getLineChartData, getPieChartData } = useChartData()
  const { getTotalAmountOfMonth } = useRecordsHandler()

  const onMonthChange = (month: number) => {
    setMonth(month)
  }

  const onChartTypeSelect = (value: string) => {
    setChartType(value)
  }

  const onAmountTypeSelect = (type: AmountType) => {
    setAmountType(type)
  }

  const lineChartData = getLineChartData(dayjs().year(), month, amountType)
  const pieChartData = getPieChartData(dayjs().year(), month, amountType)

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
          lineChartData.yData.length === 0 || pieChartData.length === 0 ? <NoData height={'40%'} /> :
            chartType === '流水' ?
            <LineChart
              xData={ lineChartData.xData }
              yData={ lineChartData.yData }
            /> :
            <PieChart data={ pieChartData } />
        }
      </div>
    </Layout>
  )
}