import { auth, storage, db } from '../configs/firebase'
import { useState, useEffect } from 'react'

// core components

import useAuthContext from './useAuthContext/index.js'

const useAuth = () => {
  const [error, setError] = useState(null)
  const [isCancelled, setCancel] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { dispatch, Types } = useAuthContext()

  const signup = async (data) => {
    const { email, password } = data
    console.log('the data value from the from', Object.keys(data))

    if (error) setError(null)
    setLoading(true)
    try {
      //signup the user
      const res = await auth.createUserWithEmailAndPassword(email, password)
      if (!res) throw new Error('Cannot complete the sign up process')
      const displayName = data.displayName ? data.displayName : data.firstName
      const uploadPath = `profilePics/${res.user.uid}/${data.profileImage.name}`
      const img = await storage.ref(uploadPath).put(data.profileImage)
      const imgUrl = await img.ref.getDownloadURL()
      // add display AND PHOTO_URL name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      // create a user document
      await db.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      })

      dispatch({ type: Types.USER_LOGGED_IN, payload: res.user })
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
      const res = await auth.signInWithEmailAndPassword(email, password)
      if (!res) throw new Error('We could not sign the user in')
      const documentRef = db.collection('users').doc(res.user.uid)
      await documentRef.update({ online: true })
      dispatch({ type: Types.USER_LOGGED_IN, payload: res.user })
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
      const { uid } = auth.currentUser
      await db.collection('users').doc(uid).update({ online: false })
      await auth.signOut()

      if (!isCancelled) {
        setLoading(false)
        setError(null)
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
