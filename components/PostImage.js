import React from 'react'

function PostImage({ postTitle, imageUrl }) {
  return (
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <img src={ imageUrl} 
            alt={postTitle} 
            title={postTitle}
            className='object-top absolute h-80 w-full object-cocver shadow-lg rounded-t-lg lg:rounded-lg'/>
        </div>
  )
}
export default PostImage;