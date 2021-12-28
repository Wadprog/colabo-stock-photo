import { useState, useEffect } from 'react'
import { db } from '../Firebase'

export default function useCollection(collection) {
  const [documents, setDocuments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
  
    const unsubscribe = db.collection(collection).onSnapshot(
      (snapshot) => {
        setIsLoading(true)
        if (snapshot.empty) {
          setError('There is no documents to display')
          setIsLoading(false)
        } else {
          const results = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setDocuments(results)
          setError(null)
          setIsLoading(false)
        }
      },
      (error) => {
        console.error(error.message)
        setError('Error finding the data')
        setIsLoading(false)
      }
    )
    return () => unsubscribe()
  }, [collection])
  return { documents, error, isLoading }
}
