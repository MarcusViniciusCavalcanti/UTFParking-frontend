import React from 'react'
import { Checkbox } from 'antd'
import Input from './Input'

function InputCheckbox ({ label, defaultValue, ...props }) {
  return (
    <Input
      {...props}
      component={({ value, ...props }) => (
        <Checkbox
          defaultValue={defaultValue}
          checked={value}
          {...props}
        >
          {label}
        </Checkbox>
      )}
    />
  )
}

export default InputCheckbox
