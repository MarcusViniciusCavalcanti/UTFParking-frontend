import React from 'react'
import Input from 'components/Input'
import InputRadio from 'components/InputRadio'
import InputCheckbox from 'components/InputCheckbox'
import InputCheckboxGroup from 'components/InputCheckboxGroup'
import InputPassword from 'components/InputPassword'
import { Row, Col } from 'antd'

export const CarInformation = () => (
  <Row gutter={[24]}>
    <Col xs={24} md={12}>
      <Input
        name='carModel'
        label='Modelo do carro'
      />
    </Col>
    <Col xs={24} md={12}>
      <Input
        name='carPlate'
        label='Placa do carro'
      />
    </Col>
  </Row>
)

export const StepPersonalInformation = () => (
  <>
    <InputRadio
      name='type'
      size='large'
      label='Tipo do usuário'
      defaultValue='STUDENTS'
      options={[
        { value: 'STUDENTS', label: 'Aluno' },
        { value: 'SERVICE', label: 'Servidor' }
      ]}
    />

    <Input
      name='name'
      label='Nome completo'
    />

    <CarInformation />
  </>
)

export const StepAccess = () => (
  <>
    <Input
      name='username'
      label='Usuário'
    />

    <InputPassword
      name='password'
      label='Senha'
    />

    <InputCheckboxGroup
      name='authorities'
      label='Perfils de acesso'
      tooltip='Os perfils de acesso limitam os recursos permitidos para o usuário'
      options={[
        { value: 1, label: 'Usuário' },
        { value: 2, label: 'Operador' },
        { value: 3, label: 'Administrador' }
      ]}
    />
  </>
)

export const StepPermissions = () => (
  <>
    <InputCheckbox
      name='enabled'
      label='Conta ativa'
      tooltip='Ativa/desativa a conta do usuário'
    />

    <InputCheckbox
      name='accountNonLocked'
      label='Conta bloqueada'
      tooltip='Bloqueia/desbloqueia o acesso do usuário'
    />

    <InputCheckbox
      name='accountNonExpired'
      label='Conta expirada'
      tooltip='Expira ou não a conta do usuário'
    />

    <InputCheckbox
      name='credentialsNonExpired'
      label='Credenciais expirada'
      tooltip='Expira ou nãoo acesso ao sistema'
    />
  </>
)
