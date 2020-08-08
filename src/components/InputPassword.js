import React from 'react'
import { Input as AntInput } from 'antd'
import Input from './Input'

function InputPassword (props) {
  return (
    <Input {...props} component={AntInput.Password} />
  )
}

export default InputPassword
