import React, { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import * as AuthAPI from 'api/auth'
import * as UsersAPI from 'api/users'

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
    try {
      const { value } = await AuthAPI.login({ username, password })
      setToken(value.replace(/bearer /gi, ''))
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
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
      Cookies.set(TOKEN_STORE_KEY, token);

      (async () => {
        // TODO: catch errors
        const user = await UsersAPI.me()
        setUser(user)
        setAuthenticated(true)
      })()
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
