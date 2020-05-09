import React from 'react'
import { Button } from 'antd'
import { useAuth } from 'stores/AuthProvider'

function SignIn () {
  const { signIn } = useAuth()

  const handleSubmit = async () => {
    try {
      await signIn({ username: 'beltrano_admin', password: '1234567' })
    } catch (error) {
      if (error.title === 'Unauthorized') {
        // TODO: handle
        window.alert(JSON.stringify(error, null, 2))
      }
    }
  }

  return (
    <div style={{ padding: '10vw' }}>
      <h1>SignIn</h1>
      <Button type='primary' onClick={handleSubmit}>Fake signin</Button>
    </div>
  )
}

export default SignIn
