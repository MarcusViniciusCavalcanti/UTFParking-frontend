import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import Page from 'components/Page'
import { withUsersProvider, useUsers } from 'stores/UsersProvider'
import { columns } from './table-config'

function Users () {
  const { loading, users, fetchUsers } = useUsers()

  useEffect(() => { fetchUsers() }, [])

  return (
    <Page
      noPadding
      title='Usuários'
      breadcrumb={[{ label: 'Usuários' }]}
      extra={[
        <Button key='bt-new-user' type='primary'>Novo usuário</Button>
      ]}
    >
      <Table
        bordered
        columns={columns}
        loading={loading}
        dataSource={users}
        rowKey={({ userId }) => userId}
      />
    </Page>
  )
}

export default withUsersProvider(Users)
