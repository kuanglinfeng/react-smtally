
type TagItem = {
  title: string
  value: string
}

type RecordItem = {
  id?: string
  type: '+' | '-'
  tag: TagItem
  remark?: string
  amount: number
  date: Date
}

type IconWrapperProps = {
  backgroundColor: string
}