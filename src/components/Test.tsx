import React from 'react'
import useRecords from '../hooks/useRecords'

// const recordItem: RecordItem = {
//   type: '+',
//   tag: "餐饮",
//   amount: 111111,
//   notes: '嘿嘿嘿',
//   date: new Date().toLocaleDateString()
// }


export default () => {

  const { getAll } = useRecords()
  const log = () => {
    console.log(getAll())
  }

  return <div>
    <button>添加1条记录</button>
    <button onClick={log}>显示state</button>
  </div>
}