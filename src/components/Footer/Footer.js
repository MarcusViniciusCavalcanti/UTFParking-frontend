import React from 'react'
import { Layout } from 'antd'
import { padding } from 'assets/styled-variables'

const Footer = () => {
  return (
    <Layout.Footer style={{ padding: padding.md }}>
      &copy;
      {` 2019-${new Date().getFullYear()} `}
      <strong>UTFPR</strong>{' '}
      <i>de alunos para alunos</i>
    </Layout.Footer>
  )
}

export default Footer
