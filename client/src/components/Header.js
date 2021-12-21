import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

const Header = () => (
  <div>
    <Navbar expand="md">
      <NavbarBrand href="#">
        {" "}
        <img
          src="https://www.collabohtbrandingagcy.com/wp-content/uploads/2021/05/logocollaboht-white.png"
          class="logo bg-branding1"
        />
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav fill className="me-auto" navbar>
          <NavItem>
            <NavLink href="#vector">Vectors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Photos
            </NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Collections
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>New Year</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Christmas</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default Header;
