import styled from 'styled-components'
import theme from 'theme'

const Header = styled.header`
  padding: 8px 12px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: ${ theme.color };
  font-size: 14px;
  .icon {
    width: 30px;  height: 30px;
    fill: #fff;
    padding: 5px;
  }
  > span {
    display: inline-block;
    color: #fff;
    width: 30px;height: 30px;
  }
`

export default Header