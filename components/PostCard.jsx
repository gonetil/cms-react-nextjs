import React from 'react'

import moment from 'moment';
import Link from 'next/link';

import PostAuthor from './artifacts/PostAuthor';
import PostDate from './artifacts/PostDate';
import PostImage from './artifacts/PostImage';

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
           <PostDate date={post.createdAt} />
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