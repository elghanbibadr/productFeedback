import React from 'react'
import Card from '../utils/Card'
import girl from "../../images/girl.jpg"
const SingleComment = () => {
  return (
   <div className="mb-5 border-b-2 ">
    <div className='flex-row-between'>
        <div className='flex'>
         <img className='h-10 w-10 object-cover rounded-full mr-4' src={girl} alt='person image' />
         <div>
            <h3>Javier Pollard</h3>
            <p>@warlikeduke</p>
         </div>
        </div>
        <a className='text-blue text-sm md:text-base font-semibold cursor-pointer'>Reply</a>
    </div> 
    <p className='mt-6'>
    Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean
    </p>
   </div>
  )
}

export default SingleComment