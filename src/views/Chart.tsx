import React, { useState } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Layout from 'components/Layout'
import LineChart from 'components/chart/LineChart'
import PieChart from 'components/chart/PieChart'
import Header from 'components/chart/Header'
import ChartType from 'components/chart/ChartTypes'
import AmountTypes from 'components/chart/AmountTypes'
import NoData from 'components/NoData'
import Rank from 'components/chart/Rank'
import useChartData from 'hooks/useChartData'
import useRecordsHandler from 'hooks/useRecordsHandler'

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
`

const Average = styled.span`
  color: #B9B9B9;
  font-size: 12px;
  padding: 10px 15px;
  display: inline-block;
`

const Divide = styled.div`
  background: #EFEFEF;
  padding: 4px;
`

export default function () {

  const [month, setMonth] = useState(dayjs().month() + 1)
  const [amountType, setAmountType] = useState<AmountType>('-')
  const [chartType, setChartType] = useState('流水')
  const { getLineChartData, getPieChartData } = useChartData()
  const { getTotalAmountOfMonth, getAverageAmountOfMonth, getRankData } = useRecordsHandler()

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
      <Wrapper>
        <Header year={ dayjs().year() } month={ month } onMonthChange={ onMonthChange } />
        <ChartType values={ ['流水', '分类'] } onSelect={ onChartTypeSelect } />
        <AmountTypes
          incomeAmount={ getTotalAmountOfMonth(dayjs().year(), month).income }
          outlayAmount={ getTotalAmountOfMonth(dayjs().year(), month).outlay }
          onTypeSelect={ onAmountTypeSelect }
        />
        {
          lineChartData.yData.length === 0 || pieChartData.length === 0 ? <NoData height={ '40%' } /> :
            chartType === '流水' ?
              <div>
                <LineChart
                  xData={ lineChartData.xData }
                  yData={ lineChartData.yData }
                />
                <Average>月平均{ amountType === '-' ? '支出' : '收入' }：{ getAverageAmountOfMonth(dayjs().year(), month, amountType) }</Average>
                <Divide />
                <Rank
                  amountType={ amountType }
                  year={ dayjs().year() }
                  month={ month }
                  rankData={ getRankData(dayjs().year(), month, amountType) }
                />
              </div>
              :
              <div>
                <PieChart data={ pieChartData } />
                <Divide />
                <Rank
                  amountType={ amountType }
                  year={ dayjs().year() }
                  month={ month }
                  rankData={ getRankData(dayjs().year(), month, amountType) }
                />
              </div>
        }
      </Wrapper>
    </Layout>
  )
}