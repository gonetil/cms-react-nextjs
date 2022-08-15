import React from 'react'

import { getPosts, getPostDetails} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';

const PostDetails = ({ post }) => {
  return (
              <>
                <PostDetail post={post}/>
                {post.authors.map((author) => <Author key={author.name} author={author} />)}
                <CommentsForm slug={post.slug} />
                <Comments slug={post.slug} />
               </>
  )
}

export default PostDetails;


export async function getStaticProps( { params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: { post: data }
    }
}


export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map( ({ node: { slug }}) => ({params: {slug }})),
        fallback: false
    }
}