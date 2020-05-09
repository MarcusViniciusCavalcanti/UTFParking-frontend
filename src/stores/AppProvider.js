import React, { useState, useMemo } from 'react'
import { withAuthProvider } from './AuthProvider'

const initialState = {
  ok: true
}

const AppContext = React.createContext(initialState)

function AppProvider (props) {
  const [ok] = useState(true)

  const value = useMemo(() => ({ ok }), [ok])
  return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => React.useContext(AppContext)

export default withAuthProvider(AppProvider)
