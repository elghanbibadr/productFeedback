import React, { useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Dropdown from '../utils/Dropdown'
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
  return (
   <Container >
       <div className='bg-white p-10 lg:w-1/2 lg:mx-auto newFeedbackCard'>
        <h1 className='text-xl md:text-2xl mb-10'>Create New Feedback</h1>
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
   </Container>
  )
}

export default NewFeedback