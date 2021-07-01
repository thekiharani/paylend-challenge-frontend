import React from 'react'

export const Input = ({
  id,
  type = 'text',
  value,
  onChange,
  className = '',
  placeholder = '',
  readOnly = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`my-1 w-full px-4 border-gray-300 rounded-full disabled:opacity-50 disabled:bg-gray-200 disabled:cursor-not-allowed ${className}`}
      placeholder={placeholder}
      disabled={readOnly}
    />
  )
}

export const Select = ({ id, onChange, className, children }) => {
  return (
    <select
      id={id}
      onChange={onChange}
      className={`my-1 w-full px-4 border-gray-300 rounded-full disabled:opacity-50 disabled:bg-gray-200 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </select>
  )
}

export const Label = ({ id, className = '', children }) => {
  return (
    <label className={`px-4 ${className}`} htmlFor={id}>
      {children}
    </label>
  )
}

export const SuccessMessage = ({ className = '', children }) => {
  return (
    <div className={`text-green-600 px-4 text-sm ${className}`}>{children}</div>
  )
}

export const ErrorMessage = ({ className = '', children }) => {
  return (
    <div className={`text-red-600 px-4 text-sm ${className}`}>{children}</div>
  )
}

export const SuccessCard = ({ className = '', children }) => {
  return (
    <div
      className={`bg-green-600 text-white px-4 py-2 rounded-sm text-sm text-center ${className}`}
    >
      {children}
    </div>
  )
}

export const ErrorCard = ({ className = '', children }) => {
  return (
    <div
      className={`bg-red-600 text-white px-4 py-2 rounded-sm text-sm text-center ${className}`}
    >
      {children}
    </div>
  )
}
