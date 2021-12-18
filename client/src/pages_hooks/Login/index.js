import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'

// Core components
import { Field, Form, Submit } from '../../components_hooks/form'
import useAuth from '../../hooks/useAuth'

const LoginScreen = () => {
  const { signup, isLoading, error } = useAuth()
  const handleLogin = ({ email, password, displayName }, form) => {
    signup(email, password, displayName)
    form.resetForm()
  }

  return (
    <Col lg="5" md="7">
      <Card className=" border-0">
        <CardHeader className="bg-transparent pb-5">
          <h1 className="mt-3 text-center">
            Collabo<span className="text-muted">Photo</span>
          </h1>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <Form
            validationSchema={ValidationSchema}
            initialValues={{
              email: '',
              password: '',
              displayName: '',
            }}
            onSubmit={handleLogin}
          >
            <Field
              autoCapitalize="none"
              icon="fas fa-user"
              placeholder="Ex:Robert"
              name="displayName"
              type="text"
            />
            <Field
              autoCapitalize="none"
              icon="fas fa-user"
              placeholder="email"
              name="email"
              type="email"
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
            {error && <p>{error}</p>}

            <Submit
              disabled={isLoading}
              title={isLoading ? 'Loading' : 'create account'}
            />
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <Link className="text-light" to={'/'}>
            <small>Forgot password?</small>
          </Link>
        </Col>
      </Row>
    </Col>
  )
}

export default LoginScreen

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email().required().min(2).label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  displayName: Yup.string().required().min(5).label('Display name'),
})
