import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Header from "../../components/Header";

const AuthNavBar = () => {
  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark d-flex flex-column"
        expand="md"
        color="light"
      >
        <div className="d-flex flex-column px-4">
          <div className="p-2">
            <NavbarBrand to="/" tag={Link}>
              <h5>
                <span className="fw-bold fs-6 text-secondary">
                  Collabo Stock
                </span>
              </h5>
            </NavbarBrand>
          </div>
          <div className="p-2"></div>
          <Header />
          {/* }
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
            {*/}
        </div>
      </Navbar>
    </>
  );
};

export default AuthNavBar;
