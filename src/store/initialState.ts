
export type State = {
  records: RecordItem[]
  myOutlayTags: TagItem[]
  myIncomeTags: TagItem[]
  selectedRecord: RecordItem | null
}

const initialState: State = {
  records: [],
  myOutlayTags: [],
  myIncomeTags: [],
  selectedRecord: null
}

export default initialState