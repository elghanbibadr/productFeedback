import React from 'react'
import SingleComment from './SingleComment'
const SingleChat = (props) => {
  return (
   <div id={props.id} className="mb-5 border-b-[1px] pb-6 ">
    <div className='flex-row-between'>
        <div className='flex'>
         <img className='h-10 w-10 object-cover rounded-full mr-4 ' src={props.user.image} alt='person image' />
         <div>
            <h3 className='mb-0'>{props.user.name}</h3>
            <p className='text-sm relative bottom-1'>@{props.user.username}</p>
         </div>
        </div>
        <a className='text-blue text-sm md:text-base font-semibold cursor-pointer'>Reply</a>
    </div> 
    <p className='mt-4 md:ml-14'>
      {props.content}
    </p>
    <ul className='ml-20 mt-6'>
      {props.replies && props.replies.map(({replyingTo,content,user},index)=>{
       return <SingleComment key={index} content={content} replyingTo={replyingTo} user={user} />
      })}
    </ul>
   </div>
  )
}

export default SingleChat