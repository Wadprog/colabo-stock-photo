import { useState, useEffect } from 'react'
import { storage, db } from '../../configs/firebase'
import useAuthContext from '../useAuthContext/index.js'

const useStorage = (collection) => {
  const { user } = useAuthContext()
  const [error, setError] = useState(null)
  const [document, setDocument] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isCanceled, setCanceled] = useState(false)
  const [progress, setProgress] = useState(null)

  const uploadDocument = async (doc) => {
    setLoading(true)
    setError(null)
    const uploadPath = `${collection}/${user.id}/${doc.name}`
    console.log('uploading docs ...')
    try {
      //   const file = await storage.ref(uploadPath).put(doc)
      console.log('in the try')
      const uploadTask = storage.ref().child(uploadPath).put(doc)
      console.log(Object.keys(uploadTask))
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
        },

        (e) => {
          console.log('Error', e.message)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(async (fileUrl) => {
            const fileData = await db
              .collection(collection)
              .add({ author: user.id, fileUrl })
            if (!isCanceled) {
              setDocument(fileData)
              setError(null)
              setLoading(false)
            }
            console.log('File available at', fileUrl)
          })
        }
      )
      //   const fileUrl = await file.ref.getDownloadURL()
      //   const fileData = await db
      //     .collection(collection)
      //     .add({ author: user.id, fileUrl })
      //   if (!isCanceled) {
      //     setDocument(fileData)
      //     setError(null)
      //     setLoading(false)
      //   }
    } catch (e) {
      console.log('some error', e)
      if (!isCanceled) {
        setError(e.message)
        setLoading(false)
        setDocument(null)
      }
    }
  }
  useEffect(() => {
    setProgress(null)
    return () => {
      setCanceled(true)
    }
  }, [])

  return { document, isLoading, error, uploadDocument, progress }
}

export default useStorage
