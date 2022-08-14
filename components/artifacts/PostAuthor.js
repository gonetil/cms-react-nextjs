import React from 'react'

function PostAuthor({author}) {
  return (
        <div className='flex items-center justify-center mb-4 inline lg:mb-0 w-auto mr-8'>
        <div>
            <img src={author.photo.url} 
                title={author.name} 
                alt={author.name}
                height='30px'
                width='30px'
                className='align-middle rounded-full' />
            </div>
            <div className='inline align-middle text-gray-700 ml-2 text-lg'>
                {author.name}    
            </div>
        </div>
  )
}

export default PostAuthor