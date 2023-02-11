import React from 'react'
const SingleComment = (props) => {
  return (
   <div id={props.id} className="mb-5 border-b-[1px] pb-6 ">
    <div className='flex-row-between'>
        <div className='flex'>
         <img className='h-10 w-10 object-cover rounded-full mr-4 md:h-14 md:w-14' src={props.user.image} alt='person image' />
         <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.username}</p>
         </div>
        </div>
        <a className='text-blue text-sm md:text-base font-semibold cursor-pointer'>Reply</a>
    </div> 
    <p className='mt-6 md:ml-14'>
      {props.content}
    </p>
   </div>
  )
}

export default SingleComment