import React from 'react'
import { StyledContent } from './styles'

const Content = ({ children, ...props }) => (
  <StyledContent {...props}>
    {children}
  </StyledContent>
)

export default Content
