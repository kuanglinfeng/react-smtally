import React, { useState } from 'react'
import Layout from 'components/Layout'
import Header from 'components/bill/Header'
import useRecords from 'hooks/useRecords'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Icon from 'components/Icon'
import weekMap from 'constants/weekMap'
import theme from 'theme'

const Bill = styled.div`
  display:flex;
  flex-direction: column;
`

const IconWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 35px; width: 35px;  
  border-radius: 50%;
  background: ${(props: IconWrapperProps) => props.backgroundColor};
  .icon {
    width: 25px;  height: 25px;
    fill: #fff;
  }

`

const DateList = styled.ul`
  height: 100%;
  overflow: auto;
`
const DateItem = styled.li`

`

const RecordList = styled.ul`
  padding: 0 20px;
  font-size: 14px;
`
const RecordItem = styled.li`
  border-bottom: 1px solid #EDEDED;
  &:last-child {
    //border:none;
  }
  overflow: hidden;
  padding: 10px 0;
  > .tag {
    float: left;
    display:flex;
    align-items: center;
    > div.remarkWrapper {
      margin-left: 10px;
      display:flex;
      flex-direction: column;
      color: #797979;
      > span {
        &.remark {
          font-size: 12px;
          color: #A7A7A7;
        }
      }
    }
  }
  > .amount {
    line-height: 34px;
    height: 34px;
    float: right;
    color: #E58580;
  }
`

const Title = styled.div`
  padding: 6px 16px;
  color: #949494;
  overflow: hidden;
  background: #F7F9F8;
  font-size: 12px;
`

const Date = styled.div`
  float: left;
`

const TotalAmount = styled.div`
  float: right;
  > span {
    margin-left: 8px;
  }
`

export default () => {

  const [income] = useState(0)
  const [outlay] = useState(0)
  const {getAll} = useRecords()
  const [year] = useState(dayjs().year())
  const [month, setMonth] = useState(dayjs().month() + 1)

  const onMonthChange = (m: number) => {
    setMonth(m)
  }

  const mapRecordsByDate = () => {
    const records = getAll()
    const map: any = {}
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      const d = dayjs(record.date).date()
      if (!map[`${y}-${m}-${d}`]) {
        map[`${y}-${m}-${d}`] = [record]
      } else {
        map[`${y}-${m}-${d}`].push(record)
      }
    })
    return map
  }

  const filterRecordsByYearAndMonth = (year: number, month: number) => {
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


  const renderEl = () => {
    const map = filterRecordsByYearAndMonth(year, month)
    const elements = []
    for (const prop in map) {
      if (map.hasOwnProperty(prop)) {
        console.log(prop)
        const m = dayjs(prop).month() + 1
        const d = dayjs(prop).date()
        const week = weekMap[dayjs(prop).day()]
        const title = (<Title>
          <Date>{m}月{d}日 周{week}</Date>
          <TotalAmount>
            <span>支出：120000000000</span>
            <span>收入：120000000000</span>
          </TotalAmount>
        </Title>)
        const records = map[prop].map((record: RecordItem) => {
          return (<RecordItem key={record.id}>
            <div className='tag'>
              <IconWrapper backgroundColor={theme.tagColors[record.tag.value]}>
                <Icon name={`${record.tag.value}`} />
              </IconWrapper>
              <div className='remarkWrapper'>
                <span>{ record.tag.title }</span>
                <span className='remark'>{record.remark}</span>
              </div>
            </div>
            <div className='amount'>{record.amount}</div>
          </RecordItem>)
        })
        const recordsWrapper = <RecordList>{records}</RecordList>
        const dateItem = <DateItem key={prop}>{title}{recordsWrapper}</DateItem>
        elements.push(dateItem)
      }
    }
    return <DateList>{elements}</DateList>
  }

  return (
    <Layout>
      <Bill>
        <Header year={year} month={month} income={income} onMonthChange={onMonthChange} outlay={outlay} />
        { renderEl() }
      </Bill>
    </Layout>
  )
}