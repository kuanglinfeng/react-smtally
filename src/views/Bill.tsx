import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'components/bill/Header'
import useRecords from 'hooks/useRecords'
import dayjs from 'dayjs'
import Icon from 'components/Icon'
import weekMap from 'constants/weekMap'
import theme from 'theme'
import {
  Title,
  RecordItem,
  IconWrapper,
  DateSpan,
  TotalAmount,
  RecordList,
  DateList,
  DateItem,
  Bill
} from 'components/bill/Main'
import { ActionSheet } from 'antd-mobile'
import NoData from 'components/NoData'

export default () => {

  const { getAll, remove } = useRecords()
  const [year] = useState(dayjs().year())
  const [month, setMonth] = useState(dayjs().month() + 1)
  const refreshPage = useState({})[1]
  const history = useHistory()

  const showActionSheet = (id: string) => {
    const buttons = ['编辑', '删除', '取消']
    ActionSheet.showActionSheetWithOptions({
      options: buttons,
      cancelButtonIndex: buttons.length - 1,
      destructiveButtonIndex: buttons.length - 2,
      maskClosable: true
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        history.push(`/add?id=${ id }`)
      } else if (buttonIndex === 1) {
        remove(id)
        refreshPage({})
      }
    })
  }

  const onMonthChange = (m: number) => setMonth(m)

  const mapRecordsByDate = () => {
    const records = getAll()
    records.sort((a:RecordItem, b: RecordItem) => {
      let aTime = new Date(a.date).getTime()
      let bTime = new Date(b.date).getTime()
      return bTime - aTime
    })
    const map: any = {}
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      const d = dayjs(record.date).date()
      if (!map[`${ y }-${ m }-${ d }`]) {
        map[`${ y }-${ m }-${ d }`] = [record]
      } else {
        map[`${ y }-${ m }-${ d }`].push(record)
      }
    })
    return map
  }

  function filterRecordsByYearAndMonth(year: number, month: number): { [key: string]: RecordItem[] } {
    const dateMap = mapRecordsByDate()
    const map: any = {}
    for (const prop in dateMap) {
      if (dateMap.hasOwnProperty(prop)) {
        const y = parseInt(prop.split('-')[0])
        const m = parseInt(prop.split('-')[1])
        if (year === y && month === m) {
          map[prop] = dateMap[prop]
        }
      }
    }
    return map
  }

  const calcMonthAmount = (type: '-' | '+') => {
    const map = filterRecordsByYearAndMonth(year, month)
    let total = 0
    let records: RecordItem[] = []
    Object.values(map).forEach(arr => {
      records = [...records, ...arr]
    })
    records.forEach(record => {
      if (record.type === type) {
        total += record.amount
      }
    })
    return parseFloat(total.toFixed(2))
  }

  const renderEl = () => {
    const map = filterRecordsByYearAndMonth(year, month)
    const elements = []
    const dayAmount = {
      income: 0,
      outlay: 0
    }
    for (const prop in map) {
      if (map.hasOwnProperty(prop)) {
        const m = dayjs(prop).month() + 1
        const d = dayjs(prop).date()
        const week = weekMap[dayjs(prop).day()]
        const records = map[prop].map((record: RecordItem) => {
          if (record.type === '-') {
            dayAmount.outlay += record.amount
          } else {
            dayAmount.income += record.amount
          }
          return (<RecordItem key={ record.id } onClick={ () => showActionSheet(record.id!) }>
            <div className='tag'>
              <IconWrapper backgroundColor={ theme.tagColors[record.tag.value] }>
                <Icon name={ `${ record.tag.value }` } />
              </IconWrapper>
              <div className='remarkWrapper'>
                <span>{ record.tag.title }</span>
                <span className='remark'>{ record.remark }</span>
              </div>
            </div>
            <div
              className='amount'>{ record.type === '-' ? '-' + record.amount.toFixed(2) : '+' + record.amount.toFixed(2) }</div>
          </RecordItem>)
        })
        const title = (<Title>
          <DateSpan>{ m }月{ d }日 周{ week }</DateSpan>
          <TotalAmount>
            <span>收入：{ dayAmount.income.toFixed(2) }</span>
            <span>支出：{ dayAmount.outlay.toFixed(2) }</span>
          </TotalAmount>
        </Title>)
        dayAmount.income = 0
        dayAmount.outlay = 0
        const recordsWrapper = <RecordList>{ records }</RecordList>
        const dateItem = <DateItem key={ prop }>{ title }{ recordsWrapper }</DateItem>
        elements.push(dateItem)
      }
    }
    if (elements.length === 0) {
      return <NoData />
    }
    return <DateList>{ elements }</DateList>
  }

  return (
    <Layout>
      <Bill>
        <Header
          year={ year }
          month={ month }
          income={ calcMonthAmount('+') }
          outlay={ calcMonthAmount('-') }
          onMonthChange={ onMonthChange }
        />
        { renderEl() }
      </Bill>
    </Layout>
  )
}