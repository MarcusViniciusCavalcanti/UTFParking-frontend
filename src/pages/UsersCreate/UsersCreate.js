import React from 'react'
import { Formik } from 'formik'
import Page from 'components/Page'
import UsersCreateForm from './UsersCreateForm'

function UsersCreate () {
  return (
    <Page
      noPadding
      title='Criar um novo usuário'
      breadcrumb={[{ to: '/users', label: 'Usuários' }, { label: 'Novo' }]}
    >
      <Formik
        initialValues={{
          name: 'Fulano de Tal',
          username: 'fulano_username',
          password: '12345678',
          authorities: [1, 2, 3],
          type: 'SERVICE',
          accountNonExpired: true,
          accountNonLocked: true,
          credentialsNonExpired: false,
          enabled: true,
          carPlate: 'adf12345',
          carModel: 'Another'
        }}
        onSubmit={(data) => console.log(data)}
        component={UsersCreateForm}
      />
    </Page>
  )
}

export default UsersCreate
