import env from '../configs/app.config'
// components
import Dashboard from 'pages/Landing'
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import Register from 'pages/Register'

const paths = env.endpoints
const { layouts } = env

var routes = [
  {
    path: paths.DASHBOARD,
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Dashboard,
    layout: layouts.ADMIN,
    supervisorAccess: true,
  },

  {
    path: paths.LOGIN,
    name: 'Login',
    icon: 'ni ni-tv-2 text-primary',
    component: Login,
    layout: layouts.AUTH,
  },
  {
    path: paths.REGISTER,
    name: 'Register',
    icon: 'ni ni-tv-2 text-primary',
    component: Register,
    layout: layouts.AUTH,
  },
  {
    path: paths.LANDING,
    name: 'Landing',
    icon: 'ni ni-tv-2 text-primary',
    component: Landing,
    layout: layouts.AUTH,
  },
  {
    path: paths.MARKET,
    name: 'Market',
    icon: 'ni ni-tv-2 text-primary',
    component: Landing,
    layout: layouts.ADMIN,
  },
]
export default routes
