import { PickerData } from 'antd-mobile/es/picker/PropsType'

const getPickerMonths = () => {
  const months: PickerData[] = []
  for (let i = 1; i < 13; i++) {
    months.push({ label: i.toString(), value: i.toString() })
  }
  return months
}

export default getPickerMonths