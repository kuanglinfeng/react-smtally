import { RecordItem } from 'components/bill/Main'
import dayjs from 'dayjs'
import useRecords from 'hooks/useRecords'

export default () => {

  const {getAll} = useRecords()

  const mapRecordsByDate = () => {
    const records = getAll()
    records.sort((a: RecordItem, b: RecordItem) => {
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
    return {outlay, income}
  }

  return {mapRecordsByDate, filterRecordsByYearAndMonth, getTotalAmountOfMonth}
}