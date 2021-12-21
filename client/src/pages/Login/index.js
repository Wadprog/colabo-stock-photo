import React from 'react'
import { object } from 'yup'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardFooter,
  Spinner,
} from 'reactstrap'

import useAuth from 'hooks/useAuth'
import routes from 'configs/app.config'
import PageWrapper from 'components/PageWrapper'
import { Form, Field, Submit } from 'components/form'
import { emailValidator, passwordValidator } from 'Validation'

const Login = () => {
  const { isLoading, error, login } = useAuth()
  const handleLogin = ({ email, password }, form) => {
    login(email, password)
    form.resetForm()
  }
  return (
    <PageWrapper isLoading={isLoading}>
      <Card className=" border-0">
        <Row className=" d-flex">
          <Col lg="6" className="d-none d-lg-block">
            <div className="card1 pb-5">
              <Row>
                <img
                  src="https://www.collabohtbrandingagcy.com/wp-content/uploads/2021/05/logocollaboht-white.png"
                  class="logo bg-branding1"
                />
              </Row>
              <Row class=" px-3 justify-content-center mt-4 mb-5 border-line">
                <img src="https://i.imgur.com/uNGdWHi.png" class="image" />
              </Row>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <Card className="border-0 ">
              <CardHeader className="bg-transparent pb-5">
                <h1 className="mt-3 text-center">
                  Collabo<span className="text-muted">Photo</span>
                </h1>
                {error && <p>{error}</p>}
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Row className=" mb-4 px-3 d-none">
                  <h6 class="mb-0 mr-4 mt-2 mb-2">Sign in with</h6>
                  <div class="facebook text-center mr-3">
                    <div class="fa fa-facebook"></div>
                  </div>
                  <div class="twitter text-center mr-3 mx-3">
                    <div class="fa fa-twitter"></div>
                  </div>
                  <div class="linkedin text-center mr-3">
                    <div class="fa fa-linkedin"></div>
                  </div>
                </Row>
                <Row class=" px-3 mb-4">
                  <div class="line"></div>{' '}
                  <small class="or text-center">Or</small>
                  <div class="line"></div>
                </Row>
                <Form
                  validationSchema={ValidationSchema}
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  onSubmit={handleLogin}
                >
                  <Field
                    autoCapitalize="none"
                    icon="fas fa-user"
                    placeholder="Username"
                    name="email"
                    type="text"
                  />
                  <Field
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="ni ni-lock-circle-open"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="new-email"
                  />
                  {
                    <Submit
                      disabled={isLoading}
                      title={isLoading ? 'Loading...' : 'Sign in'}
                      Icon={isLoading ? Spinner : null}
                    />
                  }
                </Form>
              </CardBody>
              <CardFooter className="border-0">
                <Row>
                  <Col xs="6">
                    <Link
                      className="text-secondary bg-transparent"
                      to={`${routes.layouts.AUTH}${routes.endpoints.FORGOT_PASSWORD}`}
                    >
                      <small>Forgot password?</small>
                    </Link>
                  </Col>
                  <Col xs="6">
                    <Link
                      className="text-secondary"
                      to={`${routes.layouts.AUTH}${routes.endpoints.FORGOT_PASSWORD}`}
                    >
                      <small>Forgot password?</small>
                    </Link>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Card>
    </PageWrapper>
  )
}

export default Login

const ValidationSchema = object().shape({
  email: emailValidator.required(),
  password: passwordValidator,
})
