
type TagItem = {
  title: string
  value: string
}

type AmountType = '+' | '-'

type RecordItem = {
  id?: string
  type: AmountType
  tag: TagItem
  remark?: string
  amount: number
  date: Date
}

type IconWrapperProps = {
  backgroundColor: string
}