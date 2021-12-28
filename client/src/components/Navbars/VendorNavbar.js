import { Link } from 'react-router-dom'
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Navbar,
  Nav,
  Container,
  Media,
  NavItem,
  Button,
} from 'reactstrap'

import useAuth from 'hooks/useAuth'
import useStorage from 'hooks/useStorage'
import useAuthContext from 'hooks/useAuthContext'

const AdminNavbar = (props) => {
  const { user } = useAuthContext()
  const { logout } = useAuth()
  const { document, isLoading, error, uploadDocument, progress } =
    useStorage('test')
  const handleFileUpload = (e) => {
    e.stopPropagation()
    const file = e.target.files[0]
    uploadDocument(file)
  }
  return (
    <>
      <Navbar
        className="navbar-top navbar-light border-bottom"
        expand="md"
        id="navbar-main"
      >
        <Container fluid>
          <Link
            className="h4 mb-0 text-secondary text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {/* <Button primary type="file">
              <i className="fa fa-upload mr-3" />
              Upload your files
            </Button> */}
            <form>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onClick={(e) => e.stopPropagation()}
                onChange={handleFileUpload}
              />
            </form>
            {error && <p>{error}</p>}
            {document && <p>{document.toString()}</p>}
            <p>{isLoading ? 'Loading' : 'not'}</p>
            {progress != null && <p>{progress}</p>}
          </Link>
          <Form className="navbar-search navbar-search-light form-inline mr-3 d-none d-md-flex ml-lg-auto"></Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <NavItem>
              <i className="fa fa-home"></i>
            </NavItem>
          </Nav>
          <Nav className="align-items-center d-none d-md-flex ml-2" navbar>
            <NavItem>
              <i className="fa fa-bell"></i>
            </NavItem>
          </Nav>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt={user.firstName + ' avatar'}
                      src={
                        user.photoUrl ||
                        'https://www.gravatar.com/avatar/ad1668219b4d1578d04edd4b5051f79e?s=200&r=pg&d=retro'
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <div className="mb-0 text-sm font-weight-bold mb-0">
                      {user.firstName}
                    </div>
                    <small>Level 1</small>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" end>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => logout()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminNavbar
