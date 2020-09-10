
type TagItem = {
  title: string
  value: string
}

type RecordItem = {
  id?: string
  type: '+' | '-'
  tag: Tag
  remark?: string
  amount: number
  date: string
}