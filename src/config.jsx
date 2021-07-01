/* import dotenv from 'dotenv'
dotenv.config() */

const HOST_URL = window.location.hostname
let API_URL

switch (HOST_URL) {
  case 'localhost':
  case '127.0.0.1':
    API_URL = 'http://localhost:8200/api'
    break

  default:
    API_URL = ''
    break
}

const prettyJSON = (data) => {
  return JSON.stringify(data, null, 2)
}

const parseJSON = (data) => {
  return JSON.parse(data)
}


export { HOST_URL, API_URL, prettyJSON, parseJSON }