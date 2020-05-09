import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'

const Breadcrumb = ({ crumbs }) => (
  <AntBreadcrumb>
    <AntBreadcrumb.Item>Início</AntBreadcrumb.Item>
    {crumbs && crumbs.map(
      ({ label, to }) => (
        <AntBreadcrumb.Item key={label}>{label}</AntBreadcrumb.Item>
      )
    )}
  </AntBreadcrumb>
)

export default Breadcrumb
