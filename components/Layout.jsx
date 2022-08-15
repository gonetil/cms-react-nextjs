import React from 'react'
import { Header } from './';
import Head from 'next/head'

import { Categories, PostWidget} from '../components'

const Layout = ({ children }) => {
  return (
    <>
   <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Gonetil's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        { children }
        </div>
      
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
        </div>
    </div>
        
    </>
  )
}


export default Layout