import useRecords from 'hooks/useRecords'
import dayjs from 'dayjs'

export default () => {

  const { getAll } = useRecords()

  /**
   * 获取折线图的x轴和y轴的数据
   * @param year
   * @param month
   * @param type
   * @return {[day: string]: amount}
   */
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


  return { getLineChartData }
}
