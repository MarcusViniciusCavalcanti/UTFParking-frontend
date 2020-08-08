import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import { useAuth } from 'stores/AuthProvider'
import Dashboard from 'Dashboard'
import SignIn from './SignIn'

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
      <Route path='/signin' exact render={() => <Redirect to='/' />} />
      <Route path='/' component={Dashboard} />
    </Switch>
  )
}

export default App
