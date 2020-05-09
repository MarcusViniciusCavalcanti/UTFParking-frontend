import React from 'react'
import { Layout } from 'antd'
import PageHeader from 'components/PageHeader'
import Content from 'components/Content'
import { padding } from 'assets/styled-variables'

function Page ({ children, ...pageHeaderProps }) {
  return (
    <>
      <PageHeader {...pageHeaderProps} />

      <Layout.Content style={{ margin: `0 ${padding.md}` }}>
        <Content>
          {children}
        </Content>
      </Layout.Content>
    </>
  )
}

export default Page
