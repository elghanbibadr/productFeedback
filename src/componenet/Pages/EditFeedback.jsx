import React, { useContext, useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Btn from '../utils/Btn'
import Dropdown from '../utils/Dropdown'
import { Link } from 'react-router-dom'
import editFeedbackIcon from "../../images/shared/icon-edit-feedback.svg"
import arrowLeft from "../../images/shared/icon-arrow-left.svg";
import { AppContext } from '../store/AppContext'

const EditFeedback = () => {
    const {productRequests,currentSuggestionId}=useContext(AppContext)
    
    const currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)
    const {id,title,description,upvotes,category:currentCategory}=currentSuggestion
    const [feedbackTitle,setFeedbackTitle] =useState(title)
    const [feedbackTitltInputTouched,setFeedbackTitleInputTouched] = useState(false)
    const [feedbackDetailInputTouched,setFeedbackDetailInputTouched] = useState(false)
   const [feedbackDetailValue,setFeedbackDetailValue]=useState(description)
   const [category,setCategory]=useState(currentCategory)

    // const navigate = useNavigate();




    const handleFeedbackTitleInputChange=(e) =>{
       setFeedbackTitle(e.target.value)
       setFeedbackTitleInputTouched(true)
    }
    const handleUserSelection=(selectedValue) => {
        console.log(selectedValue)
    }

    const handleFeedbackDetail=(value)=>{
       setFeedbackDetailValue(value)
       setFeedbackDetailInputTouched(true)

    }

    const handleFormSubmited=(e)=>{
        e.preventDefault()
       setFeedbackDetailInputTouched(true)
       setFeedbackTitleInputTouched(true)
       if (!feedbackDetailValue || !feedbackTitle){
           return
       }
    //  const createdFeedack={
    //    id:productRequests.length+1,
    //    title:feedbackTitle,
    //    description:feedbackDetailValue,
    //    status:"suggestion",
    //    category:category,
    //    comments:[],
    //    upvotes:0,
    //  }
    //  setProductRequests(prv =>[...prv,createdFeedack])
    //  setSuggestion(prv => [...prv,createdFeedack])
     navigate('/');

     
    }
   
 return (
  <Container >
      <div className='p-10 lg:w-1/2 lg:mx-auto '>
          <div className='flex items-center mb-10'>
               <img src={arrowLeft} alt="left arrow" />
               <Link to='/'  className='text-sm ml-3 text-greyDark font-bold'>Go Back</Link>
           </div>
          <div className='bg-white p-10 newFeedbackCard relative'>
           <img className='absolute -top-5' src={editFeedbackIcon} />
           <h1 className='text-xl md:text-2xl my-8 '>Create New Feedback</h1>
            <form onSubmit={handleFormSubmited}>
               {/* form label */}
               <div >
                   <label className='text-base text-greyDarkest font-semibold'  htmlFor='input-title '>Feedback Title</label>
                   <p className='text-sm' >add a short ,descriptive headline</p>
                    <input
                      id='input-title'
                      value={feedbackTitle}
                      onChange={handleFeedbackTitleInputChange}
                     className={`${(!feedbackTitle && feedbackTitltInputTouched) ? "border-red border-2":""} input`}
                     type="text"
                     name
                     />
                 {  feedbackTitltInputTouched &&  !feedbackTitle && <p className='text-red'>can't be empty</p> }
               </div>
               {/* form label */}
               <div className='my-6' >
                   <label className='text-base text-greyDarkest font-semibold'>Category</label>
                   <p className='text-sm' >Choose a category for your feedback</p>
                    <div className="input mb-10">
                        <Dropdown name='newFeedbackDropDown' onSaveSelection={handleUserSelection} className='w-full' defaultOption={category} options={["Feature","UI","UX","Enhancement","Bug"]}/>
                    </div>
               </div>
               {/* form label */}
               <div >
                   <label className='text-base text-greyDarkest font-semibold'>Feedback Detail</label>
                   <p className='text-sm'>Include any specific comments on what should be improved, added, etc.</p>
                    <TextAreaInput textAreaValue={description} className={`${( feedbackDetailInputTouched &&  !feedbackDetailValue) ? "border-red border-2" :""}`} onSaveTextAreaValue={handleFeedbackDetail}/>
                   { !feedbackDetailValue && feedbackDetailInputTouched &&  <p className='text-red'>can't be empty</p>}
               </div>
               <div className='flex-row-between mt-10'>
                   <Btn className='bg-red mx-3' text="Delete" />
                   <div  >
                       <Link to="/">
                           <Btn className='bg-greyDarkest mx-3' text="Cancel" />
                       </Link>
                         <Btn className='bg-purple' text="Save Changes" />
                   </div>
               </div>
            </form>
           </div>
      </div>
  </Container>
 )
}

export default EditFeedback;