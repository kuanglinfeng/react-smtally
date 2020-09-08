
type TagItem = {
  title: string
  value: string
}

type RecordItem = {
  id?: string
  type: '+' | '-'
  tag: Tag
  notes?: string
  amount: number
  date: string
}