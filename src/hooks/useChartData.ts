import useRecords from 'hooks/useRecords'
import dayjs from 'dayjs'

export default () => {

  const { getAll } = useRecords()

  /**
   * 获取某年某个月每天的支出/收入的金额
   * @param year
   * @param month
   * @param type
   * @return {[day: string]: amount}
   */
  const getDaysInMonthAmount = (year: number, month: number, type: AmountType) => {
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

  return { getDaysInMonthAmount, getTotalAmountOfMonth }
}
