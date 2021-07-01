import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/buttons'
import AuthLayout from '../components/authLayout'
import { parseJSON } from '../config'

const Welcome = () => {
  const history = useHistory()
  const userData = parseJSON(localStorage.getItem('userInfo'))

  if (userData === null) history.replace('/login')

  const logout = () => {
    localStorage.clear()
    history.replace('/login')
  }

  const edit = () => {
    history.push('/edit')
  }

  const DATE_OPTIONS = {
    //weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return (
    <AuthLayout>
      <div className="bg-white rounded-lg p-8">
        <div className="flex flex-col space-y-2 my-2 text-center">
          <p className="text-lg">
            Welcome <span className="font-bold">{userData.full_name}</span>
          </p>

          <table className="table-auto w-full whitespace-nowrap">
            <tbody>
              <tr className="text-left">
                <td className="border px-6 py-3">First Name</td>
                <th className="border px-6 py-3 font-bold">
                  {userData.first_name}
                </th>
              </tr>

              <tr className="text-left">
                <td className="border px-6 py-3">Last Name</td>
                <th className="border px-6 py-3 font-bold">
                  {userData.last_name}
                </th>
              </tr>
              <tr className="text-left">
                <td className="border px-6 py-3">Email</td>
                <th className="border px-6 py-3 font-bold">{userData.email}</th>
              </tr>
              <tr className="text-left">
                <td className="border px-6 py-3">Gender</td>
                <th className="border px-6 py-3 font-bold">
                  {userData.gender}
                </th>
              </tr>
              <tr className="text-left">
                <td className="border px-6 py-3">Date of Birth</td>
                <th className="border px-6 py-3 font-bold">
                  {new Date(userData.dob).toLocaleDateString(
                    'en-US',
                    DATE_OPTIONS
                  )}
                </th>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-4">
            <Button
              className="bg-blue-500 hover:bg-blue-700 px-6 rounded-none rounded-l-full w-1/2"
              onClick={edit}
            >
              Edit
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-700 px-6 rounded-none rounded-r-full w-1/2"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Welcome
