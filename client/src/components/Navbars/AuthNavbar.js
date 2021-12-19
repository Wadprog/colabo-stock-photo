import { Link } from 'react-router-dom'
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const AuthNavBar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <h4>
              Collabo<span className="text-muted">Photo</span>
            </h4>
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/auth/login/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/auth/register/">Register</NavLink>
            </NavItem>
          </Nav>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
        </Container>
      </Navbar>
    </>
  )
}

export default AuthNavBar
