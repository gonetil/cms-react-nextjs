import React, { useEffect, useState } from 'react'
import { getFeaturedPosts } from '../services';
import FeaturedPost from './artifacts/FeaturedPost'

function FeaturedPostsCarrousel() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getFeaturedPosts().then((featuredPosts) => setPosts(featuredPosts));
    },[]);

    console.log('Featured: ',posts);
    return (
      <div className='w-full bg-black mx-auto mb-10 bg-opacity-30 rounded-lg mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          { posts.map((post)=> <FeaturedPost key={post.slug} post={post} />)}
          </div>
      </div>
  )
}

export default FeaturedPostsCarrousel