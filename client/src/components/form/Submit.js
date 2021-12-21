import { useFormikContext } from 'formik'

import { Button } from 'reactstrap'

function SubmitBtn({ title, Icon, ...otherProps }) {
  const { handleSubmit } = useFormikContext()

  return (
    <Button
      color="primary"
      type="button"
      onClick={handleSubmit}
      {...otherProps}
    >
      {title} {Icon && <Icon />}
    </Button>
  )
}

export default SubmitBtn
