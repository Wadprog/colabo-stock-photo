import { useFormikContext } from 'formik'
import { FormGroup, Input } from 'reactstrap'

import Error from './Error'

function FormImageInput({ name, ...otherProps }) {
  const { values, setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext()

  return (
    <>
      <FormGroup>
        <Input
          //value={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChange={(e) => {
            setFieldValue(name, e.target.files[0])
          }}
          {...otherProps}
          type="file"
        />
        <Error error={errors[name]} visible={touched[name]} />
      </FormGroup>
    </>
  )
}

export default FormImageInput
