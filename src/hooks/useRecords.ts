import db from "../utils/db";
import createId from "../utils/createId";

export default function () {

  function getAll(): RecordItem[] {
    return db.get('records') || []
  }

  function get(id: string) {
    const records = getAll()
    return records.filter(record => record.id === id)[0]
  }
  function add(record: RecordItem) {
    record.id = createId()
    const records = getAll()
    records.push(record)
    db.set('records', JSON.stringify(records))
  }
  function remove(id: string) {
    const records = getAll()
    if (records.length === 0) return 
    const index: number = records.findIndex(record => record.id === id)
    if (index === -1) return
    records.splice(index, 1)
    db.set('records', JSON.stringify(records))
  }
  function edit(id: string, record: RecordItem) {
    record.id = id
    const records = getAll()
    const index: number = records.findIndex(record => record.id === id)
    records.splice(index, 1, record)
    db.set('records', JSON.stringify(records))
  }

  return {get, getAll, add, remove, edit}
}