import React from 'react'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useAuth } from 'stores/AuthProvider'
import HeaderUserMenu from './HeaderUserMenu'

function HeaderUser () {
  const { user } = useAuth()

  return (
    <Dropdown overlay={HeaderUserMenu} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>
        {user.name} <DownOutlined />
      </a>
    </Dropdown>
  )
}

export default HeaderUser
