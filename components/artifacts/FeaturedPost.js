import React from 'react'
import Link from 'next/link'

const FeaturedPost = ({post}) => {
  return (
    <div className='bg-white shadow-lg lg:col-span-2 col-span-2 md:col-span-4 text-center h-25  m-2 container text-clip overflow-hidden'>
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} 
                title={post.title} 
                alt={post.title}
                className='align-middle h-full cursor-pointer rounded-30px'  />
          </Link>      
          <div className='relative -top-9 pb-4 mb-2 bg-black bg-opacity-30 text-sm text-white font-semibold text-ellipsis'>
             { post.title }
          </div>

    </div>
  )
}

export default FeaturedPost