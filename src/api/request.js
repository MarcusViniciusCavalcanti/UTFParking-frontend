import Cookies from 'js-cookie'

const API_URL = 'http://161.35.48.161:8080/'

const request = async (resource, { method, body, authenticated }) => {
  try {
    const url = new URL(`api/${resource}`, API_URL)
    const token = Cookies.get('utfpr_token')
    const response = await window.fetch(url.toString(), {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(authenticated && { Authorization: `Bearer ${token}` })
      },
      body: body && JSON.stringify(body)
    })

    if (response.status >= 200 && response.status < 300) {
      return response.json()
    }

    return Promise.reject(await response.json())
  } catch (error) {
    return Promise.reject(error)
  }
}

export default request
