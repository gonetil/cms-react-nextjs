import React, {useEffect, useState} from 'react'
import { getComments } from '../services'
import moment from 'moment';
import parse from 'html-react-parser';
import EmptyResult from './artifacts/EmptyResult';

const Comments = ({slug}) => {
  
   const [postComments, setPostComments ] = useState([]);
   useEffect(()=>{
    getComments(slug)
    .then( (result) => {
      setPostComments(result)
      })
    },[postComments]);   

    return (
      <>
        { (postComments.length > 0) ? (
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
              {postComments.length}
              {' '}
              Comments
            </h3>
              {postComments.map((comment, index) => (
                <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                  <p className="mb-4">
                    <span className="font-semibold">{comment.name}</span>
                    {' '}
                    on
                    {' '}
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </p>
                  <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
                </div>
              ))}
          </div>
        ) : 
        <EmptyResult>Be the first to comment this post </EmptyResult>  }
      </>
    );
}

export default Comments;
