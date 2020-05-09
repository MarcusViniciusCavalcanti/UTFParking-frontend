import styled from 'styled-components'
import { Layout } from 'antd'
import { padding } from 'assets/styled-variables'

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  padding: 0 ${padding.md};
  background-color: white;
`
