import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from '../pages_hooks/Landing'
import Login from '../pages_hooks/Login'

const Navigation = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Navigation
