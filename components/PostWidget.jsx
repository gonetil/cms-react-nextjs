import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services';
import WidgetLayout from './artifacts/WidgetLayout';
/**
 * 
 * Displays Recent Posts in Home page, and Related Posts in single Post page
 */
const PostWidget = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {  //if there's a slug, then we're seeing a single post
            getSimilarPosts(categories,slug)
            .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
            .then((result) => setRelatedPosts(result))

        }
    },[slug])
    console.log(relatedPosts);

  return (
    <WidgetLayout title={slug ? 'Related Posts' : 'Recent Posts'}>
        { relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img 
                        alt={post.title}
                        height='60px'
                        width='60px'
                        className='align-middle rounded-full'
                        src={post.featuredImage.url}
                        />
                     </div>
                     <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>{ moment(post.createdAt).format('MMM DD,YYYY') }</p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                        {post.title}
                     </Link>
                     </div>   
                </div>
                )
            )
            }
    </WidgetLayout>
  )
}

export default PostWidget