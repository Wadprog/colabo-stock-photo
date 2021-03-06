import config from '../configs/app.config'
import React from 'react'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'
// reactstrap components
import { Container } from 'reactstrap'
// core components
import AdminNavbar from '../components/Navbars/AdminNavbar.js'
import AdminFooter from '../components/Footers/AdminFooter.js'
import Sidebar from '../components/Sidebar/Sidebar.js'

import routes from 'Navigation/routes'
import SuperUserRoutes from './SuperUserRoutes'
import useAuthContext from '../hooks/useAuthContext'

const { endpoints, layouts } = config
const Admin = (props) => {
  const { user } = useAuthContext()

  const mainContent = React.useRef(null)
  const location = useLocation()

  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContent.current.scrollTop = 0
  }, [location])

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === layouts.ADMIN) {
        if (prop?.supervisorAccess) {
          return (
            <SuperUserRoutes
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          )
        } else {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          )
        }
      } else {
        return null
      }
    })
  }

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name
      }
    }
    return 'Brand'
  }

  return (
    <>
      {user?.isVendor && <Sidebar {...props} routes={routes} />}
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          {user?.isVendor ? (
            <Redirect from="*" to={`${layouts.ADMIN}${endpoints.DASHBOARD}`} />
          ) : (
            <Redirect from="*" to={`${layouts.ADMIN}${endpoints.MARKET}`} />
          )}
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  )
}

export default Admin
