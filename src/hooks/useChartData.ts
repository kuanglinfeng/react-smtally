import useRecords from 'hooks/useRecords'
import dayjs from 'dayjs'

type PieChartDataItem = {
  name: string
  value: number
}

export type PieChartData = PieChartDataItem[]

export default () => {

  const { getAll } = useRecords()

  const getLineChartData = (year: number, month: number, type: AmountType) => {
    const days = dayjs(year + '' + month ).daysInMonth()
    const records = getAll()
    const map: { [key: string]: number } = {}
    for (let i = 1; i < days + 1; i++) {
      map[i] = 0
    }
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      const d = dayjs(record.date).date()
      if (y === year && m === month && record.type === type) {
        if (map[d] === 0) {
          map[d] = record.amount
        } else {
          map[d] += record.amount
        }
      }
    })
    return {xData: Object.keys(map), yData: Object.values(map)}
  }

  const getAmountByTag = (tagTitle: string) => {
    const records = getAll()
    let amount = 0
    records.forEach(record => {
      if (tagTitle === record.tag.title) {
        amount += record.amount
      }
    })
    return amount
  }

  const getPieChartData = (year: number, month: number, type: AmountType) => {
    const records = getAll()
    const dataArray: PieChartData = []
    const tagsMap: {[key: string]: boolean} = {}
    records.forEach(record => {
      const y = dayjs(record.date).year()
      const m = dayjs(record.date).month() + 1
      if (y === year && m === month && record.type === type && !tagsMap[record.tag.title]) {
        tagsMap[record.tag.title] = true
      }
    })
    const tags = Object.keys(tagsMap)
    tags.forEach(tag => {
      dataArray.push({name: tag, value: getAmountByTag(tag)})
    })
    return dataArray
  }




  return { getLineChartData, getPieChartData }
}
