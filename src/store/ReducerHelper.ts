import { State } from './initialState';
import db from '../utils/db';
import copy from '../utils/copy';
import createId from '../utils/createId';

export default class {

  public static fetchRecords(state: State): State {
    const records = db.get('records') || []
    return { ...state, records }
  }
  
  public static fetchRecord(state: State, id: string): State {
    const tempRecords = copy<RecordItem[]>(state.records)
    const current = tempRecords.filter((record) => record.id === id)[0]
    return { ...state, selectedRecord: current }
  }
  
  public static addRecord(state: State, record: RecordItem): State {
    const tempRecords = copy<RecordItem[]>(state.records)
    const r = copy<RecordItem>(record)
    r.id = createId()
    tempRecords.push(r)
    db.set('records', JSON.stringify(tempRecords))
    return { ...state, records: tempRecords }
  }
  
  public static removeRecord(state: State, id: string) {
    if (state.records.length === 0) return state
    const tempRecords = copy<RecordItem[]>(state.records)
    const index: number = tempRecords.findIndex((record) => record.id === id)
    if (index === -1) return state
    tempRecords.splice(index, 1)
    db.set('records', JSON.stringify(tempRecords))
    return { ...state, records: tempRecords }
  }
  
  public static editRecord(state: State, id: string, record: RecordItem): State {
    this.removeRecord(state, id)
    this.fetchRecords(state)
    let tempRecords = copy(state.records)
    record.id = id
    tempRecords.push(record)
    db.set('records', JSON.stringify(tempRecords))
    return {...state, records: tempRecords}
  }
  
  public static fetchMyOutlayTags(state: State): State {
    const tempTags = db.get('myOutlayTags') || []
    return {...state, myOutlayTags: tempTags}
  }
  
  public static setMyOutlayTags(state: State, tags: TagItem[]): State {
    const tempTags = [...tags]
    db.set('myOutlayTags', JSON.stringify(tempTags))
    return {...state, myOutlayTags: tempTags}
  }
  
  public static fetchMyIcomeTags(state: State): State {
    const tempTags = db.get('myIncomeTags') || []
    return {...state, myIncomeTags: tempTags}
  }
  
  public static setMyIncomeTags(state: State, tags: TagItem[]): State {
    const tempTags = [...tags]
    db.set('myIncomeTags', JSON.stringify(tempTags))
    return {...state, myIncomeTags: tempTags}
  }
}