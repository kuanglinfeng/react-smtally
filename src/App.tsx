import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Chart from './views/Chart'
import Tally from './views/Tally'

const Wrapper = styled.div`
  border: 1px solid red;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/tally" component={Tally} exact/>
          <Route path="/chart" component={Chart} exact/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Wrapper>
  )
}
export default App
