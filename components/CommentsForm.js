import React, { useState, useEffect, useRef} from 'react'
import { submitComment } from '../services';

const CommentsForm = ( {slug} ) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();


    useEffect( () => {
        setLocalStorage(window.localStorage);
        nameEl.currentvalue = window.localStorage.getItem('name');
        emailEl.currentvalue = window.localStorage.getItem('email');
    },[] )

    const handleCommentSubmission = () => {
        setError(false);

        //quick validation: all fields are required
        const formElements = [commentEl,nameEl,emailEl];
        const validationError = formElements.map((elem)=>elem.current.value).reduce((( prev, curr) => !curr || prev) , false);
        const { checked: storeData } = storeDataEl.current;

        if (validationError) {
            setError(true);
            return;
        }
        
        const commentObj = {
            name: nameEl.current.value, email: emailEl.current.value, comment: commentEl.current.value, slug: slug
        };

        if (storeData) {
            localStorage.setItem('name',nameEl.current.value);
            localStorage.setItem('name',emailEl.current.value);
        } else {
            localStorage.removeItem('name',nameEl.current.value);
            localStorage.removeItem('name',emailEl.current.value);
        }
        
        submitComment(commentObj)
        .then((res)=> {
            setShowSuccessMessage(true);
            formElements.forEach((elem)=>{elem.current.value = ''});
            setTimeout(()=>{
                setShowSuccessMessage(false)
            }, 3000);
        })

    }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Coment</h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
            placeholder='Comment'
            name='comment' />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
            <input 
              type='text'
              ref={nameEl}
              name='name'
              placeholder='Your name...'
              className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
              />
        <input 
              type='email'
              ref={emailEl}
              name='email'
              placeholder='Your email...'
              className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
              />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <div>                
                <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' />
                <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save my email</label>
            </div>
        </div>
        { error && <p className='text-xs text-red-500'> All fields are required.</p>}
        <div className='mt-8'>
            <button 
                type='button' 
                onClick={ handleCommentSubmission } 
                className='transtition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'> Post comment </button>
        </div>
        { showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'> Comment submited for review </span>}
        
    </div>
  )
}

export default CommentsForm