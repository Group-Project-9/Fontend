import React from 'react'

const Security_setting = () => {
  return (
    <div className="bg-gray-100 rounded-2xl h-full w-full">
      <div className='flex w-full h-20 justify-center items-center px-10 border bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl xl:text-5xl text-inherit'>Security Settings</h1>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-5">
        {/* <h2 className="text-2xl font-semibold mb-4">Security Settings</h2> */}

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your current password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your new password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border rounded px-3 py-2"
            placeholder="Confirm your new password"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto w-full">
          Update Password
        </button>
      </div>
    </div>
  )
}

export default Security_setting