import React from 'react'
import SingleImage from './Gallery/SingleImage'
import { picture } from '../data/picture'
import useCollection from '../hooks/useCollection'
const Gallery = () => {
  const { documents, error, isLoading } = useCollection('test')

  if (error) return <p>error</p>

  return (
    <div className="py-3 row">
      {!isLoading ? (
        <>
          {documents &&
            documents.map(({ fileUrl, ...otherProps }) => (
              <SingleImage
                {...otherProps}
                src={fileUrl}
                height={picture[0].height}
                width={picture[0].width}
              />
            ))}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default Gallery
