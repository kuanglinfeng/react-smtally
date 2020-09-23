import React from 'react'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import ReactEcharts from 'echarts-for-react'

type LineChartProps = {
  xData: string[]
  yData: number[]
}

const getOption = (props: LineChartProps) => {
  return {
    grid: {
      top: '5%',
      bottom: '10%'
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: '{b0}日 {c0}',
      axisPointer: {
        lineStyle: {
          color: '#E48076',
          width: '1',
        },
      },
      position(point: any) {
        return [point[0], '-10%']
      },
      backgroundColor: 'rgba(0, 0, 0, 0)',
      textStyle: {
        color: '#E48076',
        fontSize: '12'
      }
    },
    xAxis: {
      data: props.xData,
      axisTick: {
        interval: 0,
        lineStyle: {
          opacity: 0
        }
      },
      axisLabel: {
        interval: 0,
        fontSize: 8,
        color: '#999999'
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          opacity: 0
        }
      },
      splitLine: {
        lineStyle: {
          opacity: 0
        }
      },
      axisLabel: undefined,
      axisTick: undefined,
    },
    series: [
      {
        type: 'line',
        data: props.yData
      }
    ]
  }
}

export default (props: LineChartProps) => {
  return (
    <ReactEcharts
      theme="light"
      option={ getOption(props) as any }
      style={ { height: '150px', marginTop: '20px' } }
    />
  )
}