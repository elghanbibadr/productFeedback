import React, { useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Dropdown from '../utils/Dropdown'
import { Link } from 'react-router-dom'
import Btn from '../utils/Btn'
import newFeedbackIcon from '../../images/shared/icon-new-feedback.svg'
import arrowLeft from "../../images/shared/icon-arrow-left.svg";

const NewFeedback = () => {
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

     const handleFormSubmited=(e)=>{
        console.log("submited")
        e.preventDefault()
     }

  return (
   <Container >
       <div className='p-10 lg:w-1/2 lg:mx-auto '>
           <div className='flex items-center mb-10'>
                <img src={arrowLeft} alt="left arrow" />
                <Link to='/'  className='text-sm ml-3 text-greyDark font-bold'>Go Back</Link>
            </div>
           <div className='bg-white p-10 newFeedbackCard relative'>
            <img className='absolute -top-5' src={newFeedbackIcon} />
            <h1 className='text-xl md:text-2xl my-8 '>Create New Feedback</h1>
             <form onSubmit={handleFormSubmited}>
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
                <div className='mt-6 relative left-1/2' >
                    <Link to="/">
                        <Btn className='bg-greyDarkest mx-3' text="cancel" />
                    </Link>
                    <Btn className='bg-purple' text="Add Feedback" />
                </div> 
             </form>
            </div>
       </div>
   </Container>
  )
}

export default NewFeedback;