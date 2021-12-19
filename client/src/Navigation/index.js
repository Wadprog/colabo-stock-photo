import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Custom components
import useAuthContext from '../hooks/useAuthContext'
import AdminLayout from '../layouts/Admin'
import AuthLayout from '../layouts/Auth/Auth.js'

const Navigation = () => {
  const { user } = useAuthContext()
  return (
    <>
      {user ? (
        <Switch>
          <Route path="/" render={(props) => <AdminLayout {...props} />} />
        </Switch>
      ) : (
        <>
          {console.log('no user')}
          <Switch>
            <Route path="/" render={(props) => <AuthLayout {...props} />} />
          </Switch>
        </>
      )}
    </>
  )
}

export default Navigation
