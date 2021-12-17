import { auth } from '../configs/firebase'
import { useState, useEffect } from 'react'

// core components

import useAuthContext from './useAuthContext/index.js'

const useAuth = () => {
  const [error, setError] = useState(null)
  const [isCancelled, setCancel] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { dispatch, Types } = useAuthContext()

  const signup = async (email, password, displayName) => {
    console.log(Object.keys(auth))
    if (error) setError(null)
    setLoading(true)
    try {
      //signup the user
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      // To remove
      console.log(response.user)
      if (!response) throw new Error('Cannot complete the sign up process')

      await response.user.updateProfile({ displayName })
      dispatch({ type: Types.USER_LOGGED_IN, payload: response.user })
      if (!isCancelled) {
        setLoading(false)
        setError(null)
      }
    } catch (error) {
      console.error(error)
      if (!isCancelled) {
        setError(error.message)
        setLoading(false)
      }
    }
  }
  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      if (!response) throw new Error('We could not sign the user in')
      dispatch({ type: Types.USER_LOGGED_IN, payload: response.user })
      if (!isCancelled) {
        setLoading(false)
        setError(null)
      }
    } catch (error) {
      if (!isCancelled) {
        setLoading(false)
        setError(error.message)
      }
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await auth.signOut()
      if (!isCancelled) {
        setLoading(false)
      }
      dispatch({ type: Types.USER_LOGGED_OUT })
    } catch (error) {
      if (!isCancelled) {
        setError(error.message)
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    // clean up function
    return () => {
      setCancel(true)
    }
  }, [])

  return { logout, signup, login, isLoading, error }
}

export default useAuth
