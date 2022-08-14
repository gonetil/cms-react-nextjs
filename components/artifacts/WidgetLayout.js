import React from 'react'


function WidgetLayout({title,children}) {
  return (
    <div className='bg-white shadow.lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {title}
        </h3>
        { children }
    </div>    
  )
}

export default WidgetLayout