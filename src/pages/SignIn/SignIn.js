import React from 'react'
import { Button } from 'antd'
import { useAuth } from 'stores/AuthProvider'

function SignIn () {
  const { signIn } = useAuth()

  const handleSubmit = () => {
    signIn({ username: 'admin', password: 'admin' })
  }

  return (
    <div style={{ padding: '10vw' }}>
      <h1>SignIn</h1>
      <Button type='primary' onClick={handleSubmit}>Fake signin</Button>
    </div>
  )
}

export default SignIn
