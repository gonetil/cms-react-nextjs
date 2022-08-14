import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';
import WidgetLayout from './artifacts/WidgetLayout';



const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    getCategories()
    .then((currentCategories)=> setCategories(currentCategories))
  },[] );

  return (
    <WidgetLayout title='Categories'>
      { categories.map( (category) => (
          <Link key={category.slug} href={ `/category/${category.slug}` }>
            <span className='cursor-pointer block pb-3 mb-3'> {category.name} ({ category.posts.length}) </span>
          </Link>
        ))}
    </WidgetLayout>
    
  )
}

export default Categories

