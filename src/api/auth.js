import request from './request'

export const login = async ({ username, password }) => (
  request('v1/login', { method: 'POST', body: { username, password } })
)
