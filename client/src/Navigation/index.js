import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Landing from 'pages/landing'
import Login from 'pages/Login'
export const Navigation = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}


export default Navigation
