import React from 'react'
import { Menu, Layout } from 'antd'
import {
  DashboardOutlined,
  CarOutlined,
  TeamOutlined,
  SettingOutlined
} from '@ant-design/icons'

function Sidebar () {
  return (
    <Layout.Sider collapsible width={260}>
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['/']} mode='inline'>
        <Menu.Item key='/'>
          <DashboardOutlined />
          <span>Dashboard</span>
        </Menu.Item>

        <Menu.Item key='/recognitions'>
          <CarOutlined />
          <span>Reconhecimentos</span>
        </Menu.Item>

        <Menu.Item key='/users'>
          <TeamOutlined />
          <span>Usuários</span>
        </Menu.Item>

        <Menu.Item key='/settings'>
          <SettingOutlined />
          <span>Configurações</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default Sidebar
