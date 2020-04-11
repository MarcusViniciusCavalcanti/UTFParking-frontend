import React, { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'

const TOKEN_STORE_KEY = 'utfpr_token'

const initialState = {
  authenticated: null,
  token: null,
  user: null
}

const AuthContext = React.createContext(initialState)

function AuthProvider (props) {
  const [authenticated, setAuthenticated] = useState(initialState.authenticated)
  const [token, setToken] = useState(initialState.token)
  const [user, setUser] = useState(initialState.user)

  const signIn = async ({ username, password }) => {
    console.log(username, password)
    Cookies.set(TOKEN_STORE_KEY, 'TOKEN')
    setToken('TOKEN')
  }

  useEffect(() => {
    const tokenFromCookie = Cookies.get(TOKEN_STORE_KEY)
    if (tokenFromCookie) {
      setToken(tokenFromCookie)
    } else {
      setAuthenticated(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      setTimeout(() => setUser({ username: 'Demonstration User' }), 1)
      setAuthenticated(true)
    }
  }, [token])

  const value = useMemo(() => ({
    authenticated,
    token,
    user,
    signIn
  }), [authenticated, token, user])
  return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => React.useContext(AuthContext)

export const withAuthProvider = (Component) => {
  return (
    (props) => (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    )
  )
}

export default AuthProvider
