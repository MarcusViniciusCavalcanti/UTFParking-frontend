import React from 'react'
import { PageHeader as AntPageHeader } from 'antd'
import Breadcrumb from 'components/Breadcrumb'
import { StyledPageTitle } from './styles'

const PageHeader = ({ title, subtitle, breadcrumb, extra }) => (
  <StyledPageTitle>
    <Breadcrumb crumbs={breadcrumb} />
    <AntPageHeader
      title={title}
      subTitle={subtitle}
      style={{ padding: 0 }}
      extra={extra}
    />
  </StyledPageTitle>
)

export default PageHeader
