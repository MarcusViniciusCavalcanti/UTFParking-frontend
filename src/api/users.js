import request from './request'

export const me = async () => (
  request('v1/users/me', { method: 'GET', authenticated: true })
)
