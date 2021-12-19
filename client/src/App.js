import React from 'react'
import useAuthContext from './hooks/useAuthContext'
import Routes from './Navigation'

// customs designs
import 'assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/react.min.css'

function App() {
  const { authIsReady } = useAuthContext()

  return <>{authIsReady && <Routes />}</>
}

export default App
