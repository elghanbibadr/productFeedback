import React from 'react'

const SingleComment = (props) => {

  const handleReplyClicked=()=>console.log('handleReplyClicked')
  return (
    <div id={props.id} className="mb-5 pb-1 ">
    <div className='flex-row-between'>
        <div className='flex'>
         <img className='h-10 w-10 object-cover rounded-full mr-4 ' src={props.user.image} alt='person image' />
         <div>
            <h3 className='mb-0'>{props.user.name}</h3>
            <p className='text-sm relative bottom-1'>@{props.user.username}</p>
         </div>
        </div>
        <a onClick={handleReplyClicked} className='text-blue text-sm md:text-base font-semibold cursor-pointer'>Reply</a>
    </div> 
    <div className='mt-4 md:ml-14 '>
        <p ><strong className='text-purple font-bold'>@{props.replyingTo}</strong> {props.content}</p>
    </div>
   </div>
  )
}

export default SingleComment