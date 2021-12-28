import { useState, useEffect, useReducer } from 'react'
import { db, timestamp } from 'configs/firebase'

const initialState = {
  document: null,
  isLoading: false,
  success: false,
  error: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'is_loading':
      return {
        ...state,
        success: false,
        isLoading: true,
        error: null,
        document: null,
      }
    case 'added_document':
      return {
        ...state,
        error: null,
        success: true,
        document: action.payload,
        isLoading: false,
      }

    case 'error':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        document: null,
        success: false,
      }

    default:
      return { ...state }
  }
}
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCanceled, setIsCanceled] = useState(false)
  useEffect(() => () => setIsCanceled(true), [])

  const dispatchIfNotCanceled = (action) => {
    if (isCanceled) return
    dispatch(action)
  }
  const ref = db.collection(collection)

  const addDocument = async (doc) => {
    dispatch({ type: 'is_loading' })
    try {
      const createdAt = timestamp.fromDate(new Date())
      // const addedDoc = await ref.add({ ...doc, createdAt })
      return ref.add({ ...doc, createdAt })
      dispatch({ type: 'added_document', payload: addedDoc })
    } catch (error) {
      console.log({ message: error.message })
      dispatchIfNotCanceled({ type: 'error', payload: error.message })
    }
  }

  return { addDocument, response }
}
