const environment = {
  development: {
    endpoints: {
      DASHBOARD: '/dashboard',
      LOGIN: '/login',
      REGISTER: '/register',
      CREATE_NEW_USER: '/user',
      MARKET: '/market',
      CUSTOMERS: '/customers',
      ACCOUNT: '/account',
      FORGOT_PASSWORD: '/forgotPassword',
      RECOVER_PASSWORD: '/recoverPassword',
      SETUP: '/setup',
      AuthIN: '/index',
      LANDING: '/landing',
    },
    layouts: {
      ADMIN: '/admin',
      AUTH: '/auth',
    },
  },
  staging: {
    BASE_URL: 'YOUR_BASE_URL',
    endpoints: {
      DASHBOARD: '/dashboard',
      USER_PROFILE: '/user-profile',
      LOGIN: '/login',
      REGISTER: '/register',
      NEW_TRANSACTION: '/newtransaction',
      CREATE_NEW_USER: '/user',
      TRANSACTIONS: '/transactions',
      CUSTOMERS: '/customers',
      USER: '/user',
      RATE: '/rates',
      ESTABLISHMENT: '/establishments',
      ACCOUNT: '/account',
      INVOICE: '/invoice',
      CURRENCIES: '/currencies',
      FORGOT_PASSWORD: '/forgotPassword',
      RECOVER_PASSWORD: '/recoverPassword',
      SETUP: '/setup',
      AuthIN: '/index',
    },
    layouts: {
      ADMIN: '/admin',
      AUTH: '/auth',
    },
  },
  production: {},
}
const getEnvironment = () => {
  return environment.development
}

export default getEnvironment()
