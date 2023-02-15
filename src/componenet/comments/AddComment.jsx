import React from 'react'
import Card from '../utils/Card'
import TextAreaInput from '../utils/TextAreaInput'
import Btn from '../utils/Btn'

const AddComment = () => {

  return (
    <Card className='mt-6'>
        <h3>Add comment</h3>
        <TextAreaInput className='my-4'/>
        <div className='flex-row-between'>
            <p>255 characters left</p>
             <Btn className='bg-purple transition-colors duration-300 hover:bg-purpleHover' text='Post Comment ' />
        </div>
    </Card>
  )
}

export default AddComment