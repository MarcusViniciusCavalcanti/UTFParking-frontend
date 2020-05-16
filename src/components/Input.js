import React from 'react'
import { Form, Input as AntInput } from 'antd'
import { useField } from 'formik'

function Input ({ label, tooltip, component: Component, ...props }) {
  const [field, meta] = useField(props)
  Component = Component || AntInput

  return (
    <Form.Item label={label} help={tooltip}>
      <Component {...field} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </Form.Item>
  )
}

export default Input
