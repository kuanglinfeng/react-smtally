import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from 'views/NotFound'
import Chart from 'views/Chart'
import Add from 'views/Add'
import Bill from 'views/Bill'
import Tags from 'views/Tags'

function App() {

  return (
    <Router>
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
        <Route path='/tags'>
          <Tags />
        </Route>
        <Redirect from="/" to="bill" exact />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
