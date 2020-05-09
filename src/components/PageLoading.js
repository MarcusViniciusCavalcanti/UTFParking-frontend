import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

const StyledSpinner = styled(Spinner)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoading = (props) => (
  <StyledSpinner {...props} size={48} />
)

export default PageLoading
