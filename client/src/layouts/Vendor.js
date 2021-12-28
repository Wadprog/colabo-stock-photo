import React from 'react'
import { Container } from 'reactstrap'
import config from '../configs/app.config'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'

// Core dependencies
import routes from 'Navigation/routes'
import SuperUserRoutes from './SuperUserRoutes'
import useAuthContext from 'hooks/useAuthContext'
import Sidebar from 'components/Sidebar/Sidebar.js'
import NavBar from 'components/Navbars/VendorNavbar'
import AdminFooter from 'components/Footers/AdminFooter.js'

const { endpoints, layouts } = config

// Vendor layout
const Vendor = (props) => {
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
      if (prop.layout === layouts.VENDOR) {
        if (prop?.vendorAccess) {
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
      <Sidebar {...props} routes={routes} />
      <div className="main-content" ref={mainContent}>
        <NavBar
          {...props}
          brandText={'getBrandText(props.location.pathname)'}
        />
        <Switch>
          {getRoutes(routes)}

          <Redirect from="*" to={`${layouts.VENDOR}${endpoints.DASHBOARD}`} />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  )
}

export default Vendor
