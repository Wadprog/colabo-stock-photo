import React from 'react'
import useAuthContext from './hooks/useAuthContext'
import Routes from './Navigation'

function App() {
  const { authIsReady } = useAuthContext()

  return <>{authIsReady && <Routes />}</>
}

export default App
