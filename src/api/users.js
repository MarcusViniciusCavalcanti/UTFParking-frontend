import request from './request'

export const me = async () => (
  request('v1/users/me', { method: 'GET', authenticated: true })
)

export const list = async () => (
  request('v1/users', { method: 'GET', authenticated: true })
)
