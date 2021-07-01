import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../utils/api'
import { ErrorMessage, ErrorCard, Input, Label } from '../components/inputs'
import { Button } from '../components/buttons'
import GuestLayout from '../components/guestLayout'
import { setUser } from "../utils/auth"

const Login = () => {
  const history = useHistory()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [{ message, errors }, setErrors] = useState({
    message: null,
    errors: null,
  })

  const getUserdata = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const Authenticate = async () => {
    try {
      const { data } = await api().post('/login', userData)
      localStorage.setItem('authToken', data.token)
      await setUser()
      history.replace('/')
    } catch (error) {
      setErrors({ message: error.data.message, errors: null })
      console.log(error)
    }
  }

  return (
    <GuestLayout>
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-2xl text-center font-semibold">Login</h1>
        <hr className="w-full bg-gray-500 h2 my-2" />
        {message && <ErrorCard>{message}</ErrorCard>}
        <div className="my-2 w-full">
          <Label id="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={userData.email}
            onChange={getUserdata}
            placeholder="Email Address"
          />
          {errors && errors.email && (
            <ErrorMessage>{errors.email[0]}</ErrorMessage>
          )}
        </div>

        <div className="my-2 w-full">
          <Label id="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={userData.password}
            onChange={getUserdata}
            placeholder="Password"
          />
          {errors && errors.password && (
            <ErrorMessage>{errors.password[0]}</ErrorMessage>
          )}
        </div>

        <div className="my-2">
          <Button onClick={Authenticate} className="bg-blue-700 w-full">
            Login
          </Button>
        </div>

        <hr className="w-full bg-gray-500 h2 my-2" />

        <div className="flex flex-col space-y-2 my-2 text-center">
          <Button
            onClick={() => history.push('/register')}
            className="bg-blue-500 hover:bg-blue-700"
          >
            Have no Account?
          </Button>

          {/* <Button
            onClick={() => history.push('/forgot_password')}
            className="bg-red-500 hover:bg-red-700"
          >
            Forgot Password?
          </Button> */}
        </div>
      </div>
    </GuestLayout>
  )
}

export default Login
