import React from 'react'
import { Radio } from 'antd'
import Input from './Input'

function InputRadio ({ options, defaultValue, size, ...props }) {
  return (
    <Input
      {...props}
      component={(props) => (
        <Radio.Group
          defaultValue={defaultValue}
          size={size}
          {...props}
        >
          {options && options.map(
            ({ value, label }) => (
              <Radio.Button key={value} value={value}>{label}</Radio.Button>
            )
          )}
        </Radio.Group>
      )}
    />
  )
}

export default InputRadio
