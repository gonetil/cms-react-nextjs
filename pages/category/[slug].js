import React from 'react'
import { PostWidget, Categories, PostCard } from '../../components'
import { getCategories, getCategoryPosts } from '../../services';
import EmptyResult from '../../components/artifacts/EmptyResult';

const Category = ( { category } ) => {

    return (
        <>
              {  (category.posts.length > 0) ?
                       category.posts.map((post)=> <PostCard post={post} key={ post.title } /> )
                       : <EmptyResult>Sorry :-( No posts in this category</EmptyResult>}
        </>
    );
}

export default Category;



export async function getStaticProps( { params }) {
    const data = await getCategoryPosts(params.slug);
    return {
        props: { category: data }
    }
}

export async function getStaticPaths() {
    const categories = await getCategories();

    return {
        paths: categories.map( ({ slug }) => ({params: {slug }})),
        fallback: false
    }
}