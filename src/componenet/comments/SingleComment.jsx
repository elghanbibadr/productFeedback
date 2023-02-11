import React from 'react'
import Card from '../utils/Card'
import girl from "../../images/girl.jpg"
const SingleComment = (props) => {
  return (
   <div id={props.id} className="mb-5 border-b-2 ">
    <div className='flex-row-between'>
        <div className='flex'>
         <img className='h-10 w-10 object-cover rounded-full mr-4' src={props.user.image} alt='person image' />
         <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.username}</p>
         </div>
        </div>
        <a className='text-blue text-sm md:text-base font-semibold cursor-pointer'>Reply</a>
    </div> 
    <p className='mt-6'>
      {props.content}
    </p>
   </div>
  )
}

export default SingleComment