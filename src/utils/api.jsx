import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { API_URL } from '../config'

export const api = () => {
  const token = localStorage.getItem('authToken')
  let headers
  if (token) {
    headers = { 'x-auth-token': token }
  }
  const api = axios.create({
    baseURL: API_URL,
    headers,
  })

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        logout()
        return Promise.reject()
      }

      if (error.response) {
        return Promise.reject(error.response)
      }

      if (error.request) {
        return Promise.reject(error.request.response)
      }

      console.error(error)

      return Promise.reject(error)
    }
  )

  return api
}

export const logout = () => {
  localStorage.removeItem('authToken')
  useHistory().replace('/login')
}

export const login = (token) => {
  localStorage.setItem('authToken', token)
  useHistory().replace('/')
}

export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken')
  return token ? true : false
}
