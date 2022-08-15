import React from 'react'
import { PostWidget, Categories, PostCard } from '../../components'
import { getCategories, getCategoryPosts } from '../../services';
import EmptyResult from '../../components/artifacts/EmptyResult';

const Category = ( { category } ) => {

    return (
        <div className='container mx-auto pb-10 mb-8'>
            <h1 className='mb-8 text-3xl font-semibold text-gray-200'>Posts from category {category.name}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='lg:col-span-8 col-span-1'>
                     {  (category.posts.length > 0) ?
                           category.posts.map((post)=> <PostCard post={post} key={ post.title } /> )
                        : <EmptyResult>Sorry :-( No posts in this category</EmptyResult>}
                </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className='lg:sticky relative top-8'>
                        <PostWidget />
                        <Categories />
                        </div>
                </div>
            </div>
        </div>
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