import { Route } from 'react-router-dom'
import useAuthContext from 'hooks/useAuthContext'

const SuperUserRoutes = ({ component: Component, ...rest }) => {
  console.log('Super Routes ')
  const { user } = useAuthContext()
  if (!user?.isVendor) console.log('(setAlert)')
  return (
    <>
      {user?.isVendor ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : null}
    </>
  )
}

export default SuperUserRoutes
