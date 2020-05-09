import React, { useState, useMemo } from 'react'
import * as UsersAPI from 'api/users'

const UsersContext = React.createContext({
  error: null,
  users: null,
  loading: false
})

function UsersProvider (props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(null)
  const [users, setUsers] = useState(null)

  const fetchUsers = async () => {
    setError(null)
    setLoading(true);

    (async () => {
      const { page, _embedded } = await UsersAPI.list()
      setUsers(_embedded.userRepresentationList)
      setPage(page)
    })()

    setLoading(false)
  }

  const value = useMemo(() => ({ users, page, error, loading }), [users, page, error, loading])
  return <UsersContext.Provider value={{ ...value, fetchUsers }} {...props} />
}

export const useUsers = () => React.useContext(UsersContext)

export const withUsersProvider = (Component) => {
  return (
    (props) => (
      <UsersProvider>
        <Component {...props} />
      </UsersProvider>
    )
  )
}

export default UsersProvider
