import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ActionSheet } from 'antd-mobile'
import dayjs from 'dayjs'
import Layout from 'components/Layout'
import Header from 'components/bill/Header'
import Icon from 'components/Icon'
import NoData from 'components/NoData'
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
import useRecords from 'hooks/useRecords'
import useRecordsHandler from 'hooks/useRecordsHandler'
import weekMap from 'constants/weekMap'
import theme from 'theme'

export const renderRecords = (map: { [key: string]: RecordItem[] }, showActionSheet?: (id: string) => void) => {
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
        return (<RecordItem key={ record.id } onClick={ () => showActionSheet && showActionSheet(record.id!) }>
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

export default () => {

  const { remove } = useRecords()
  const [year] = useState(dayjs().year())
  const [month, setMonth] = useState(dayjs().month() + 1)
  const refreshPage = useState({})[1]
  const history = useHistory()
  const { filterRecordsByYearAndMonth, getTotalAmountOfMonth } = useRecordsHandler()

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
  const recordsMap = filterRecordsByYearAndMonth(year, month)

  return (
    <Layout>
      <Bill>
        <Header
          year={ year }
          month={ month }
          income={ getTotalAmountOfMonth(year, month).income }
          outlay={ getTotalAmountOfMonth(year, month).outlay }
          onMonthChange={ onMonthChange }
        />
        { renderRecords(recordsMap, showActionSheet) }
      </Bill>
    </Layout>
  )
}