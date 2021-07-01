import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../utils/api'
import { strToDate } from '../utils/dates'
import {
  ErrorMessage,
  ErrorCard,
  SuccessCard,
  Input,
  Select,
  Label,
} from '../components/inputs'
import { Button } from '../components/buttons'
import AuthLayout from '../components/authLayout'
import { getUser, setUser } from '../utils/auth'

const Edit = () => {
  const history = useHistory()

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    dob: '',
  })

  const [{ message, errors }, setErrors] = useState({
    message: null,
    errors: null,
  })

  const [success, setSuccess] = useState(false)

  const getUserdata = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const SaveData = async () => {
    try {
      userData['dob'] = strToDate(userData['dob'])
      await api().patch('/update', userData)
      await setUser()
      setSuccess(true)
    } catch (error) {
      setErrors({ message: error.data.message, errors: null })
      console.log(error)
    }
  }

  useEffect(() => {
    const user = getUser()

    setUserData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      dob: new Date(user.dob).toLocaleDateString('en-GB'), //new Date(user.dob).toLocaleDateString('en-GB'),
    })
  }, [])

  return (
    <AuthLayout>
      {success ? (
        <SuccessCard className="py-4 px-6 rounded-md">
          <p className="text-lg">User data updated!</p>
          <Button
            className="bg-blue-700 w-full mt-4"
            onClick={() => history.push('/')}
          >
            Go to Profile
          </Button>
        </SuccessCard>
      ) : (
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl text-center font-semibold">Edit Profile</h1>
          <hr className="w-full bg-gray-500 h2 my-2" />
          {message && <ErrorCard>{message}</ErrorCard>}

          <div className="my-2 w-full">
            <Label id="first_name">First Name</Label>
            <Input
              id="first_name"
              value={userData.first_name}
              onChange={getUserdata}
              placeholder="First Name"
            />
            {errors && errors.first_name && (
              <ErrorMessage>{errors.first_name[0]}</ErrorMessage>
            )}
          </div>

          <div className="my-2 w-full">
            <Label id="last_name">Last Name</Label>
            <Input
              id="last_name"
              value={userData.last_name}
              onChange={getUserdata}
              placeholder="Last Name"
            />
            {errors && errors.last_name && (
              <ErrorMessage>{errors.last_name[0]}</ErrorMessage>
            )}
          </div>

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
            <Label id="email">Gender</Label>
            <Select id="gender" onChange={getUserdata}>
              <option value={null} disabled selected>
                -- Select Gender --
              </option>
              <option value="Male" selected={userData.gender === 'Male'}>
                Male
              </option>
              <option value="Female" selected={userData.gender === 'Female'}>
                Female
              </option>
            </Select>
            {errors && errors.email && (
              <ErrorMessage>{errors.email[0]}</ErrorMessage>
            )}
          </div>

          <div className="my-2 w-full">
            <Label id="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="text"
              value={userData.dob}
              onChange={getUserdata}
              placeholder="DD/MM/YYYY"
            />
            {errors && errors.dob && (
              <ErrorMessage>{errors.dob[0]}</ErrorMessage>
            )}
          </div>

          <div className="my-2">
            <Button onClick={SaveData} className="bg-blue-700 w-full">
              Update
            </Button>
          </div>

          <hr className="w-full bg-gray-500 h2 my-2" />
        </div>
      )}
    </AuthLayout>
  )
}

export default Edit
