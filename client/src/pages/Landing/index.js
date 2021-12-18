import React from 'react'

function HomePage() {
  return (
    <div className="bg-black h-screen ">
      <nav className="bg-white w-screen flex px-10  items-center">
        <p>logo</p>
        <div className="ml-auto space-x-4 flex px-10 py-5 items-">
          <ul className=" flex space-x-4">
            <li>Explore</li>
            <li>Create acount</li>
          </ul>
          <div className="flex space-x-2 ">
            <button className="
            border-gray-50 bg-white px-4 rounded shadow-md text-dark py-1">
              Login
            </button>
            {/* 
            <button className="  bg-red-400 px-4 rounded shadow-md text-white py-1">
              Logout
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomePage
