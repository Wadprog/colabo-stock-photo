import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { CardBody, CardHeader, Card, Row, Col } from 'reactstrap'

// Custom component
import routes from 'configs/app.config.js'
import useAuth from 'hooks/useAuth'
import { imageValidator } from 'Validation'
import PageWrapper from 'components/PageWrapper'
import { Form, Field, Submit, ImgInput } from 'components/form'

const Register = () => {
  const { signup, loading, error } = useAuth()
  const handleSubmit = (data, form) => {
    signup(data)
    form.resetForm()
  }
  return (
    <PageWrapper isLoading={loading}>
      <Col lg="5" md="7">
        <Card className=" border-0">
          <CardHeader className="bg-transparent pb-5">
            <h1 className="mt-3 text-center">
              Collabo<span className="text-muted">Photo</span>
            </h1>
            {error && <p>{error}</p>}
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form
              validationSchema={ValidationSchema}
              initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                phone: '',
                profileImage: undefined,
              }}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <Field
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="ni ni-hat-3"
                    textContentType="text"
                    placeholder="First name"
                    name="firstName"
                    type="text"
                  />
                </Col>
                <Col>
                  <Field
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="ni ni-hat-3"
                    textContentType="text"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="ni ni-hat-3"
                    keyboardType="email-address"
                    textContentType="text"
                    placeholder="Telephone"
                    name="phone"
                    type="text"
                  />
                </Col>
                <Col>
                  <Field
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="ni ni-email-83"
                    keyboardType="email-address"
                    textContentType="text"
                    placeholder="Email"
                    name="email"
                    type="text"
                  />
                </Col>
              </Row>
              <Field
                autoCapitalize="none"
                autoCorrect={false}
                icon="ni ni-lock-circle-open"
                keyboardType="email-address"
                textContentType="text"
                placeholder="Password"
                name="password"
                type="password"
              />

              <ImgInput name="profileImage" />

              {/* <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">Make an Admin</span>
                    </label>
                  </div>
                </Col>
              </Row> */}
              <Submit title="Register" />
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <small className="text-light">
            Have an account?{' '}
            <Link to={`${routes.layouts.AUTH}${routes.endpoints.LOGIN}`}>
              Login instead
            </Link>
          </small>
        </Row>
      </Col>
    </PageWrapper>
  )
}

export default Register

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email/UserName'),
  firstName: Yup.string().required().min(2).label('Email/UserName'),
  lastName: Yup.string().required().min(2).label('Email/UserName'),
  password: Yup.string().required().min(4).label('password'),
  phone: Yup.string().required().min(4).label('Phone'),
  profileImage: imageValidator,
})
