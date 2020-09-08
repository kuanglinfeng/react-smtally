import { State } from './initialState'
import ReducerHelper from './ReducerHelper'

export type CommitType =
  | 'fetchRecords'
  | 'fetchRecord'
  | 'addRecord'
  | 'removeRecord'
  | 'editRecord'
  | 'fetchMyOutlayTags'
  | 'setMyOutlayTags'
  | 'fetchMyIcomeTags'
  | 'setMyIncomeTags'

export interface IAction<T extends string, P> {
  type: T
  payload: P
}

type fetchRecordsAction = IAction<'fetchRecords', undefined>
type fetchRecordAction = IAction<'fetchRecord', { id: string }>
type addRecordAction = IAction<'addRecord', { record: RecordItem }>
type removeRecordAction = IAction<'removeRecord', { id: string }>
type editRecordAction = IAction<
  'editRecord',
  { id: string; record: RecordItem }
>
type fetchMyOutlayTagsAction = IAction<'fetchMyOutlayTags', undefined>
type setMyOutlayTagsAction = IAction<'setMyOutlayTags', { tags: TagItem[] }>
type fetchMyIcomeTagsAction = IAction<'fetchMyIcomeTags', undefined>
type setMyIncomeTagsAction = IAction<'setMyIncomeTags', { tags: TagItem[] }>

type ActionTypes =
  | fetchRecordsAction
  | fetchRecordAction
  | addRecordAction
  | removeRecordAction
  | editRecordAction
  | fetchMyOutlayTagsAction
  | setMyOutlayTagsAction
  | fetchMyIcomeTagsAction
  | setMyIncomeTagsAction

export default function (state: State, action: ActionTypes): State {
  if (action.type === 'fetchRecords') {
    return ReducerHelper.fetchRecords(state)
  }
  if (action.type === 'fetchRecord') {
    return ReducerHelper.fetchRecord(state, action.payload.id)
  }
  if (action.type === 'addRecord') {
    return ReducerHelper.addRecord(state, action.payload.record)
  }
  if (action.type === 'removeRecord') {
    return ReducerHelper.removeRecord(state, action.payload.id)
  }
  if (action.type === 'editRecord') {
    const { id, record } = action.payload
    return ReducerHelper.editRecord(state, id, record)
  }
  if (action.type === 'fetchMyOutlayTags') {
    return ReducerHelper.fetchMyOutlayTags(state)
  }
  if (action.type === 'setMyOutlayTags') {
    return ReducerHelper.setMyOutlayTags(state, action.payload.tags)
  }
  if (action.type === 'fetchMyIcomeTags') {
    return ReducerHelper.fetchMyIcomeTags(state)
  }
  if (action.type === 'setMyIncomeTags') {
    return ReducerHelper.setMyIncomeTags(state, action.payload.tags)
  }
  return state
}
