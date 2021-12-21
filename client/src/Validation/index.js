import { string, mixed } from 'yup'
import config from 'configs/app.config'

export const passwordValidator = string().required().min(6).label('Password')
export const emailValidator = string().email().label('Email')

export const imageValidator = mixed()
  .required('A file is required')
  .test(
    'fileSize',
    'File too large',
    (value) => value && value.size <= config.profileImageSettings.FILE_SIZE
  )
  .test(
    'fileFormat',
    'Unsupported Format',
    (value) =>
      value &&
      config.profileImageSettings.SUPPORTED_FORMATS.includes(value.type)
  )
