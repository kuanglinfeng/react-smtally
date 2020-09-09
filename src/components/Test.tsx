import React from 'react'
import useRecords from '../hooks/useRecords'

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