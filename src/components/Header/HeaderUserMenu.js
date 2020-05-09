import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const HeaderUserMenu = () => (
  <Menu>
    <Menu.Item>
      <Link to='/profile'>Minha conta</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/settings'>Configurações</Link>
    </Menu.Item>

    <Menu.Divider />

    <Menu.Item>
      <Link to='/logout'>Sair</Link>
    </Menu.Item>
  </Menu>
)

export default HeaderUserMenu
