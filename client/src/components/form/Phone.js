import { useFormikContext } from 'formik'

import { FormGroup, Input, InputGroupText, InputGroup } from 'reactstrap'

// Core components
import Error from './Error'

function Phone({ name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched } = useFormikContext()

  return (
    <>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupText>
            <i className="fa fa-phone" />
          </InputGroupText>
          ph
        </InputGroup>
        <Error error={errors[name]} visible={touched[name]} />
      </FormGroup>
    </>
  )
}

export default Phone
