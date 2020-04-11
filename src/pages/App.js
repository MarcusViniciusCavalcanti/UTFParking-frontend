import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useApp } from 'stores/AppProvider'
import PageLoading from 'components/PageLoading'
import SignIn from './SignIn'

import 'antd/dist/antd.less'
import 'assets/custom-antd-theme.less'

function App () {
  const { authenticated } = useApp()

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
    <h1>Hello, World!</h1>
  )
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWithRouter
