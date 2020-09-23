import React from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { Header, Empty } from 'components/chart/Header'
import Icon from 'components/Icon'
import useRecordsHandler from 'hooks/useRecordsHandler'
import { renderRecords } from 'views/Bill'

const Wrapper = styled.div`
`

const Title = styled.div`
  display:flex;
  align-items: center;
`

type RankDetailLocation = {
  title: string
  value: string
  year: string
  month: string
  amountType: AmountType
}

export default () => {

  const location = useLocation()
  const history = useHistory()
  const { filterRecordsByYearAndMonth } = useRecordsHandler()

  const parsed = queryString.parse(location.search) as unknown as RankDetailLocation
  const { title, value, amountType } = parsed
  const year = parseInt(parsed.year)
  const month = parseInt(parsed.month)

  const recordsMap = filterRecordsByYearAndMonth(year, month, amountType, { title, value })

  return (
    <Wrapper>
      <Header>
        <Icon name="back" onClick={ () => history.goBack() } />
        <Title>{ title }</Title>
        <Empty />
      </Header>
      { renderRecords(recordsMap) }
    </Wrapper>
  )
}