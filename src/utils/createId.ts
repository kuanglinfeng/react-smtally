import db from "./db"

let id: number = parseInt(db.get('MAX_ID') || '0')

export default () => {
  id++
  db.set('MAX_ID', id.toString())
  return id.toString()
}
