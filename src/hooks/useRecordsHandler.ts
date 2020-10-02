import dayjs from 'dayjs'
import useRecords from 'hooks/useRecords'

export type RankData = {
  // key is tagValue
  [key: string]: {
    tag: TagItem
    count: number
    amount: number
    percentage: number
  }
}

export default () => {

  const { getAll } = useRecords()

  const mapRecordsByDate = (amountType?: AmountType, tag?: TagItem) => {
    let records = getAll()
    records.sort((a: RecordItem, b: RecordItem) => {
      let aTime = new Date(a.date).getTime()
      let bTime = new Date(b.date).getTime()
      return bTime - aTime
    })
    const map: any = {}
    if (amountType && tag) {
      records = records.filter(record => record.type === amountType && record.tag.value === tag.value)
    }
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

  function filterRecordsByYearAndMonth(year: number, month: number, amountType?: AmountType, tag?: TagItem): { [key: string]: RecordItem[] } {
    const dateMap = mapRecordsByDate(amountType, tag)
    const map: any = {}
    for (const prop in dateMap) {
      if (dateMap.hasOwnProperty(prop)) {
        const y = parseInt(prop.split('-')[0])
        const m = parseInt(prop.split('-')[1]) + 1
        if (year === y && month === m) {
          map[prop] = dateMap[prop]
        }
      }
    }
    return map
  }

  const getTotalAmountOfMonth = (year: number, month: number) => {
    const records = getAll()
    let income: number = 0
    let outlay: number = 0
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      if (y === year && m === month && record.type === '+') {
        income += record.amount
      }
      if (y === year && m === month && record.type === '-') {
        outlay += record.amount
      }
    })
    return { outlay, income }
  }

  const getAverageAmountOfMonth = (year: number, month: number, type: AmountType) => {
    const days = dayjs(year + '' + month).daysInMonth()
    const totalAmount = getTotalAmountOfMonth(year, month)
    if (type === '+')
      return (totalAmount.income / days).toFixed(2)
    else
      return (totalAmount.outlay / days).toFixed(2)
  }

  // dataItem => tagValue: {tag, recordsCount, amount, percentage}
  const getRankData = (year: number, month: number, type: AmountType): RankData => {
    const records = getAll()
    const data: RankData = {}
    const totalAmountOfMonth = getTotalAmountOfMonth(year, month)
    let totalAmount = 0
    if (type === '+')
      totalAmount = totalAmountOfMonth.income
    else
      totalAmount = totalAmountOfMonth.outlay
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      if (y === year && m === month && record.type === type) {
        const tagValue = record.tag.value
        if (!data[tagValue]) {
          data[tagValue] = { tag: record.tag, amount: record.amount, count: 1, percentage: record.amount / totalAmount }
        } else {
          const previousData = data[tagValue]
          data[tagValue] = {
            tag: record.tag,
            amount: previousData.amount + record.amount,
            count: previousData.count + 1,
            percentage: (previousData.amount + record.amount) / totalAmount
          }
        }
      }
    })
    return data
  }

  return {
    mapRecordsByDate,
    filterRecordsByYearAndMonth,
    getTotalAmountOfMonth,
    getAverageAmountOfMonth,
    getRankData
  }
}