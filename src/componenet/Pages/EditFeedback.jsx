import React, { useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Dropdown from '../utils/Dropdown'
import { Link } from 'react-router-dom'
import editFeedbackIcon from "../../images/shared/icon-edit-feedback.svg"
import arrowLeft from "../../images/shared/icon-arrow-left.svg";

const EditFeedback = () => {
    const [feedbackTitle,setFeedbackTitle] =useState('')
   

    const handleFeedbackTitleInputChange=(e) =>{
       setFeedbackTitle(e.target.value)
    }
     const handleUserSelection=(selectedValue) => {
         console.log(selectedValue)
     }

     const handleFeedbackDetail=(value)=>{
        console.log(value)
     }
  return (
   <Container >
       <div className=' lg:w-1/2 lg:mx-auto '>
           <div className='flex items-center mb-10'>
                <img src={arrowLeft} alt="left arrow" />
                <Link to='/'  className='text-sm ml-3 text-greyDark font-bold'>Go Back</Link>
            </div>
           <div className='bg-white p-10 newFeedbackCard relative'>
           <img className='absolute scale-125 -top-5' src={editFeedbackIcon} />

            <h1 className='text-xl md:text-2xl mb-10'>Editing Feedback</h1>
             <form>
                {/* form label */}
                <div >
                    <label className='text-base text-greyDarkest font-semibold'  htmlFor='input-title '>Feedback Title</label>
                    <p className='text-sm' >add a short ,descriptive headline</p>
                     <input  id='input-title'
                      className='input '
                      type="text" value={feedbackTitle}
                       onChange={handleFeedbackTitleInputChange}
                      />
                </div>
                {/* form label */}
                <div className='my-6' >
                    <label className='text-base text-greyDarkest font-semibold'>Category</label>
                    <p className='text-sm' >Choose a category for your feedback</p>
                     <div className="input mb-10">
                         <Dropdown name='newFeedbackDropDown' onSaveSelection={handleUserSelection} className='w-full' defaultOption={"Feature"} options={["Feature","UI","UX","Enhancement","Bug"]}/>
                     </div>
                </div>
                {/* form label */}
                <div >
                    <label className='text-base text-greyDarkest font-semibold'>Feedback Detail</label>
                    <p className='text-sm'>Include any specific comments on what should be improved, added, etc.</p>
                     <TextAreaInput onSaveTextAreaValue={handleFeedbackDetail}/>
                </div>
             </form>
            </div>
       </div>
   </Container>
  )
}

export default EditFeedback;