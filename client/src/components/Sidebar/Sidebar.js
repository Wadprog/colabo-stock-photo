import React, { useState } from 'react'
import { NavLink as NavLinkRRD } from 'react-router-dom'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  NavbarToggler,
} from 'reactstrap'

import useAuthContext from 'hooks/useAuthContext'
import useAuth from 'hooks/useAuth'
const Sidebar = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const { logout } = useAuth
  const { user } = useAuthContext()

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.supervisorAccess && !user.isVendor) return null
      if (!user.isVendor && prop.path === '/index') return null
      if (prop.layout === '/auth' || prop.NoList) return null
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      )
    })
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white d-print-none"
      expand="sm"
    >
      <Container fluid>
        <NavbarToggler onClick={toggle} />

        <NavbarBrand className="pt-0">
          <h4 className="mt-3" onClick={toggle}>
            Collabo<span className="text-muted text-center">Photo</span>
          </h4>
        </NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <NavbarToggler onClick={toggle} />
          <Nav navbar>{createLinks(routes)}</Nav>

          <Nav className="mb-md-3" navbar>
            <NavItem className="active-pro active">
              <NavLink href="#" onClick={(e) => logout()}>
                <i className="ni ni-spaceship" />
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Sidebar
