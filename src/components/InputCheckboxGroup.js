import React from 'react'
import { useField } from 'formik'
import { Checkbox } from 'antd'
import Input from './Input'

function InputCheckboxGroup ({ options, ...props }) {
  const [,, { setValue }] = useField(props)

  return (
    <div style={{ marginBottom: 24 }}>
      <Input
        {...props}
        component={(props) => (
          <Checkbox.Group
            {...props}
            onChange={(values) => setValue(values)}
          >
            {options && options.map(
              ({ value, label }) => (
                <Checkbox key={value} value={value}>{label}</Checkbox>
              )
            )}
          </Checkbox.Group>
        )}
      />
    </div>
  )
}

export default InputCheckboxGroup
