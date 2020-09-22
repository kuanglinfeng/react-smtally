import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from 'components/add/Header'
import Keyboard from 'components/add/Keyboard'
import AmountShow from 'components/add/AmountShow'
import UserTags from 'components/add/UserTags'
import useRecords from 'hooks/useRecords'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function () {

  const [typeValue, setTypeValue] = useState<AmountType>('-')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [remark, setRemark] = useState('')
  const [tag, setTag] = useState()
  const { add, get, edit } = useRecords()

  const history = useHistory()
  const id = queryString.parse(history.location.search).id as string
  const record = get(id)

  useEffect(() => {
    record && setTypeValue(record.type)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onTypeSelect = (value: string) => {
    setTypeValue(value === '支出' ? '-' : '+')
  }

  const onTagSelect = (tag: TagItem) => {
    setTag(tag)
  }

  const onAmountChange = (amount: string) => {
    setAmount(amount)
  }

  const onDateSelect = (date: Date) => {
    setDate(date)
  }

  const onRemarkChange = (remark: string) => {
    setRemark(remark)
  }

  const onSubmit = (amount: number) => {
    if (!id) {
      add({ type: typeValue, tag: tag, date: date, remark: remark, amount: amount })
      // 路由跳转到 /bill
      history.push('/bill')
    } else {
      edit(id, {type: typeValue, tag, remark, date, amount, id})
      history.push('/bill')
    }
  }

  return (
    <Wrapper>
      <Header
        defaultValue={record && (record.type === '-' ? '支出':'收入')}
        onSelect={ onTypeSelect }
        values={ ['支出', '收入'] }
      />
      <UserTags
        defaultTag={record && record.tag}
        type={ typeValue }
        onSelect={ onTagSelect }
      />
      <AmountShow
        defaultDate={record && new Date(record.date)}
        defaultRemark={record && record.remark}
        amount={ amount }
        onDateSelect={ onDateSelect }
        onRemarkChange={ onRemarkChange }
      />
      <Keyboard
        defaultAmount={record && record.amount.toString()}
        onAmountChange={ onAmountChange }
        onSubmit={ onSubmit }
      />
    </Wrapper>
  )
}