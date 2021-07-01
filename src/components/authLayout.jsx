import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { setUser } from '../utils/auth'

const AuthLayout = ({ children }) => {
  const history = useHistory()
  const token = localStorage.getItem('authToken')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (token === null) {
      history.replace('/login')
    }
    (async () => {
      await setUser()
      setReady(true)
    })()

    // loadUser()
  }, [token, history, setUser])
  return ready ? (
    <div className="flex bg-gray-100 items-center justify-center h-screen">
      <div className="max-w-2xl">
        {children}
      </div>
    </div>
  ) : null
}

export default AuthLayout
