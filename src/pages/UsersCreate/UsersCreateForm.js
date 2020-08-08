import React, { useState } from 'react'
import { Form, Steps, Card, Button } from 'antd'
import { RightOutlined, CheckOutlined } from '@ant-design/icons'
import {
  StepPersonalInformation,
  StepAccess,
  StepPermissions
} from './UsersCreateFormSteps'

const steps = [
  {
    title: 'Informações pessoais',
    content: <StepPersonalInformation />
  },
  {
    title: 'Acesso',
    content: <StepAccess />
  },
  {
    title: 'Permissões',
    content: <StepPermissions />
  }
]

function UsersCreateForm () {
  const [current, setCurrent] = useState(0)

  return (
    <Form layout='vertical'>
      <Steps type='navigation' size='small' current={current} onChange={setCurrent}>
        {steps.map(
          ({ title }) => <Steps.Step key={title} title={title} />
        )}
      </Steps>

      <Card bordered={false}>
        {steps[current].content}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button>Voltar</Button>
          <Button
            type='primary'
          >
            Salvar
            <CheckOutlined />
          </Button>
        </div>
      </Card>
    </Form>
  )
}

export default UsersCreateForm
