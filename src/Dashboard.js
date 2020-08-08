import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import Users from 'pages/Users'
import UsersCreate from 'pages/UsersCreate'

function Dashboard () {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />

      <Layout className='site-layout'>
        <Header />

        <Switch>
          <Route path='/users/create' component={UsersCreate} />
          <Route path='/users' component={Users} />
          <Route path='/' exact component={Home} />
        </Switch>

        <Footer />
      </Layout>
    </Layout>
  )
}

export default Dashboard
