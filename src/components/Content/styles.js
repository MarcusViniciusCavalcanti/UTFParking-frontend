import styled, { css } from 'styled-components'
import { Card } from 'antd'

export const StyledContent = styled(Card)`
  ${({ noPadding }) => noPadding && css`
    .ant-card-body {
      padding: 0;
    }
  `}
`
