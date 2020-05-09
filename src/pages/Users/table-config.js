import React from 'react'
import TagUserType from './TagUserType'
import TagEnabled from './TagEnabled'

export const columns = [
  {
    title: '#',
    key: 'user_id',
    dataIndex: 'userId'
  },
  {
    title: 'Nome',
    key: 'user_name',
    dataIndex: 'name'
  },
  {
    title: 'Placa',
    key: 'user_plate',
    dataIndex: 'plate'
  },
  {
    title: 'Modelo',
    key: 'user_id',
    dataIndex: 'id'
  },
  {
    title: 'Tipo',
    align: 'center',
    key: 'user_type',
    dataIndex: 'type',
    render: (type) => <TagUserType type={type} />
  },
  {
    title: 'Desbloqueado',
    align: 'center',
    key: 'user_account_non_locked',
    dataIndex: 'accountNonLocked',
    render: (accountNonLocked) => <TagEnabled enabled={accountNonLocked} />
  },
  {
    title: 'Ativo',
    align: 'center',
    key: 'user_enabled',
    dataIndex: 'enabled',
    render: (enabled) => <TagEnabled enabled={enabled} />
  }
]
