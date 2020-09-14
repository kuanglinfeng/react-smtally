import React, { useState } from 'react'
import Layout from 'components/Layout'
import Header from 'components/bill/Header'

export default function () {

  const [income, setIncome] = useState(0)
  const [outlay, setOutlay] = useState(0)

  const onMonthChange = (month: string) => {
    console.log(month)
  }

  return (
    <Layout>
      <div>
        <Header income={income} onMonthChange={onMonthChange} outlay={outlay} />
      </div>
    </Layout>
  )
}