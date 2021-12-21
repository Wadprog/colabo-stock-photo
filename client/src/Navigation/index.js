import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Custom components
import useAuthContext from '../hooks/useAuthContext'
import AdminLayout from '../layouts/Admin'
import AuthLayout from '../layouts/Auth/Auth.js'
import VendorLayout from '../layouts/Vendor'

const Navigation = () => {
  const { user } = useAuthContext()
  return (
    <>
      {user ? (
        <>
          {user?.isVendor ? (
            <Switch>
              <Route path="*" render={(props) => <VendorLayout {...props} />} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" render={(props) => <AdminLayout {...props} />} />
            </Switch>
          )}
        </>
      ) : (
        <>
          <Switch>
            <Route path="*" render={(props) => <AuthLayout {...props} />} />
          </Switch>
        </>
      )}
    </>
  )
}

export default Navigation
