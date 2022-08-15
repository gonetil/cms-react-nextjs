import type { NextPage } from 'next'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import EmptyResult from '../components/artifacts/EmptyResult';
import { getPosts } from '../services';


// posts array is retrieved via getStaticProps 
export default function Home ( { posts }) {
  return (
        <>      
          { (posts.length > 0) ? 
              posts.map((post,index)=> <PostCard post={post.node} key={ post.title } /> )
              : 
              <EmptyResult>There are no posts to list</EmptyResult>
              }
        </> 
  )
}

//get remote data using getStaticProps in NextJS
export async function getStaticProps( ) {  
  const posts = (await getPosts()) || [];  //return empty array if data cannot be retrieved
  return {
     props : { posts } 
    }
}

