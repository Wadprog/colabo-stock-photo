import { useFormikContext } from 'formik'

import { FormGroup, Input, InputGroupText, InputGroup } from 'reactstrap'

import Error from './Error'

function FormField({ name, icon, appendText, ...otherProps }) {
  const { values, setFieldTouched, handleChange, errors, touched } =
    useFormikContext()

  return (
    <>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          {icon && (
            <InputGroupText>
              <i className={icon} />
            </InputGroupText>
          )}
          <Input
            value={values[name]}
            onBlur={() => setFieldTouched(name)}
            onChange={handleChange(name)}
            {...otherProps}
          />
        </InputGroup>
        <Error error={errors[name]} visible={touched[name]} />
      </FormGroup>
    </>
  )
}

export default FormField
