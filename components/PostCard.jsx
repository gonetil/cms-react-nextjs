import React from 'react'

import moment from 'moment';
import Link from 'next/link';

import {PostAuthor, PostImage} from '.'

const PostCard = ({ post }) => {

    return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
           <PostImage postTitle={post.title} imageUrl={post.featuredImage.url} />
           <h1 className='transition duration-700 text-center mb-9 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
                {post.title }
            </Link>
           </h1>

           <div className='flex text-center items-center justify-center mb-8 '>
           { post.authors.map(
                (author) => <PostAuthor author={author} key={author.name} />
              )}  
           </div>
           <div className='font-medium text-gray-700 text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
           </div>
           <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
            {post.exceprt}
           </p>
           <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
                <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>Continue reading</span>
            </Link>
           </div>

           
    </div>
  )
}

export default PostCard