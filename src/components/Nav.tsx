import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import theme from 'theme'

const Nav = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  line-height: 24px;
  > ul {
    display:flex;
    > li {
      width: 33.333333%;
      &.add {
        .icon {fill: ${theme.color};}
      }
      > a {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        padding-top: 4px;
        > .icon {
         height: 32px; width: 32px;
        }
        &.active {
          > .icon {fill: ${theme.color};}
        }
      }
    }
  }
`

export default function () {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/bill">
            <Icon name="bill" />
            账单
          </Link>
        </li>
        <li className='add'>
          <Link to="/add">
            <Icon name="add" />
            记一笔
          </Link>
        </li>
        <li>
          <Link to="/chart">
            <Icon name="chart" />
            图表
          </Link>
        </li>
      </ul>
    </Nav>
  )
}