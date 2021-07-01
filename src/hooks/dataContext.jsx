import React, { useState, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  )
}
