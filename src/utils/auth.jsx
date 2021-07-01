import { prettyJSON, parseJSON } from '../config'
import { api } from '../utils/api'

export const getUser = () => {
  return parseJSON(localStorage.getItem('userInfo'))
}

export const setUser = async () => {
  try {
    const { data } = await api().get('/me')
    const userInfo = {
      ...data.profile,
      full_name: `${data.profile.first_name} ${data.profile.last_name}`,
    }
    localStorage.setItem('userInfo', prettyJSON(userInfo))
  } catch (error) {
    localStorage.clear()
    history.replace('/login')
  }
}
