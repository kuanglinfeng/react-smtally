import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  line-height: 24px;
  > ul {
    display:flex;
    > li {
      width: 33.333333%;
      padding: 16px;
      text-align: center;
    }
  }
`

export default function () {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/bill">账单</Link>
        </li>
        <li>
          <Link to="/tally">记一笔</Link>
        </li>
        <li>
          <Link to="/chart">图表</Link>
        </li>
      </ul>
    </Nav>
  )
}