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
       <div className='bg-white p-4 lg:w-1/2 lg:mx-auto'>
        <h1>Create New Feedback</h1>
         <form>
            {/* form label */}
            <div >
                <label htmlFor='input-title'>Feedback Title</label>
                <p>add a short ,descriptive headline</p>
                 <input id='input-title' className='input' type="text" value={feedbackTitle} />
            </div>
            {/* form label */}
            <div >
                <label>Category</label>
                <p>Choose a category for your feedback</p>
                 <div className="input">
                     <Dropdown name='newFeedbackDropDown' onSaveSelection={handleUserSelection} className='w-full' defaultOption={"Feature"} options={["Feature","UI","UX","Enhancement","Bug"]}/>
                 </div>
            </div>
            {/* form label */}
            <div >
                <label>Feedback Title</label>
                <p>add a short ,descriptive headline</p>
                 <TextAreaInput/>
            </div>
         </form>
        </div>
   </Container>
  )
}

export default NewFeedback