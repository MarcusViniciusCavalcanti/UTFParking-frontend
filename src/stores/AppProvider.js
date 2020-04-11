import React, { useState, useEffect, useMemo } from 'react'

const initialState = {
  authenticated: null
}

const AppContext = React.createContext(initialState)

function AppProvider (props) {
  const [authenticated, setAuthenticated] = useState(initialState.authenticated)

  useEffect(() => {
    setAuthenticated(false)
  }, [])

  const value = useMemo(() => ({ authenticated }), [authenticated])
  return <AppContext.Provider value={value} {...props} />
}

export const useApp = () => React.useContext(AppContext)

export default AppProvider
