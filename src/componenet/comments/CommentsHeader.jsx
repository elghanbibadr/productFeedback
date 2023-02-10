import React, { useContext } from 'react'
import Btn from '../utils/Btn'
import arrowLeft from "../../images/shared/icon-arrow-left.svg";
import { AppContext } from '../store/AppContext';
export const CommentsHeader = () => {
    const {setIsUserSelectedAFeature }=useContext(AppContext)
    const handleOnBackLinkClicked=()=>{
       setIsUserSelectedAFeature(true);
    }
  return (
    <div className='flex-row-between mb-8'>
        <div className='flex-row-between'> 
            <img src={arrowLeft} alt="left arrow" />
            <a onClick={handleOnBackLinkClicked} href="" className='text-sm ml-3 text-greyDark font-bold'>Go Back</a>
        </div>
        <Btn className='bg-blue' text='Edit Feedback'/>
    </div>
  )
}
