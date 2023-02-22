import React, { useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Dropdown from '../utils/Dropdown'
const NewFeedback = () => {
    const [feedbackTitle,setFeedbackTitle] =useState('')

    const handleUserSelection=(selectedValue) => {
        console.log(selectedValue)
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
                 <input  id='input-title' className='input ' type="text" value={feedbackTitle} />
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
                <label className='text-base text-greyDarkest font-semibold'>Feedback Title</label>
                <p className='text-sm'>add a short ,descriptive headline</p>
                 <TextAreaInput/>
            </div>
         </form>
        </div>
   </Container>
  )
}

export default NewFeedback