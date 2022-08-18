import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedPost = ({post}) => {
  return (
    <div className='shadow-lg lg:col-span-2 w-full col-span-2 md:col-span-4 text-center m-2 text-clip overflow-hidden'>
        <Link href={`/post/${post.slug}`}>
          <Image src={post.featuredImage.url} 
                title={post.title} 
                alt={post.title}
                height="180px"
                width="200px"
                className='align-middle cursor-pointer rounded-30px'  />
          </Link>      
          <div className='relative -top-9 pb-4  bg-black bg-opacity-30 text-sm text-white font-semibold text-ellipsis'>
             { post.title }
          </div>

    </div>
  )
}

export default FeaturedPost