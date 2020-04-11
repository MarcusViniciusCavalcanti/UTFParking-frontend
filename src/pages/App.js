import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import { useAuth } from 'stores/AuthProvider'
import SignIn from './SignIn'
import Home from './Home'

import 'antd/dist/antd.less'
import 'assets/custom-antd-theme.less'

function App () {
  const { authenticated } = useAuth()

  if (authenticated === null) {
    return <PageLoading />
  }

  if (authenticated === false) {
    return (
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route render={() => <Redirect to='/signin' />} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' render={() => <Redirect to='/' />} />
    </Switch>
  )
}

export default App
