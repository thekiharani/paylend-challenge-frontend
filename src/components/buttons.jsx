import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white py-2 px-4 rounded-full focus:outline-none ${className}`}
    >
      <div className="flex space-x-1 items-center justify-center">
        {children}
      </div>
    </button>
  )
}

export const NavButton = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-900 hover:text-white focus:outline-none ${className}`}
    >
      <div className="flex space-x-1 items-center">{children}</div>
    </button>
  )
}

export const NavLink = ({ path, className, children }) => {
  return (
    <Link href={path}>
      <a
        className={`block py-2.5 px-4 rounded transition duration-300 hover:bg-gray-900 hover:text-white ${className}`}
      >
        <div className="flex space-x-1 items-center">{children}</div>
      </a>
    </Link>
  )
}
