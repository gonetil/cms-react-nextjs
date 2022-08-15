import React from 'react'

const EmptyResult = ( {children} ) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        { children }
        
        </div>
  )
}

export default EmptyResult