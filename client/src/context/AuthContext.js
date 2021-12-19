import { auth } from '../configs/firebase'
import { createContext, useReducer, useEffect } from 'react'
const Types = {
  USER_LOGGED_IN: 'LOGIN',
  USER_LOGGED_OUT: 'LOG_OUT',
  AUTH_IS_READY: 'AUTH_READY',
}
const initialState = {
  user: null,
  authIsReady: false,
}
export const AuthContext = createContext()
export const authReducer = (state, action) => {
  switch (action.type) {
    case Types.USER_LOGGED_IN:
      return { ...state, user: action.payload }
    case Types.USER_LOGGED_OUT:
      return { ...state, user: null }
    case Types.AUTH_IS_READY:
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  console.log('Auth', state)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: Types.AUTH_IS_READY, payload: user })
      unsubscribe()
    })
  }, [])
  return (
    <AuthContext.Provider value={{ ...state, dispatch, Types }}>
      {children}
    </AuthContext.Provider>
  )
}
