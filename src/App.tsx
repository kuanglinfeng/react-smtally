import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from 'views/NotFound'
import Chart from 'views/Chart'
import Add from 'views/Add'
import Bill from 'views/Bill'
import Nav from 'components/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/bill">
              <Bill />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            <Redirect from="/" to="bill" exact />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  )
}

export default App
