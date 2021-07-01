import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const GuestLayout = ({ children }) => {
  const history = useHistory()
  const token = localStorage.getItem('authToken')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (token !== null) {
      history.replace('/')
    }
    setReady(true)
  }, [token, history])

  return ready ? (
    <div className="flex bg-gray-100 items-center justify-center h-screen">
      <div className="w-96">
        {children}
      </div>
    </div>
  ) : null
}

export default GuestLayout
