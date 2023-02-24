import React from 'react';
import Btn from '../utils/Btn'
import arrowLeft from "../../images/shared/icon-arrow-left.svg";
import { Link } from 'react-router-dom';
export const CommentsHeader = () => {
  
  return (
    <div className='flex-row-between mb-8'>
        <div className='flex-row-between'> 
            <img src={arrowLeft} alt="left arrow" />
            <Link to='/'  className='text-sm ml-3 text-greyDark font-bold'>Go Back</Link>
        </div>
      <Link to="/editfeedback">
      <Btn className='bg-blue' text='Edit Feedback'/>
      </Link>   
    </div>
  )
}
