import React, { useContext, useEffect, useState } from 'react'
import Container from '../utils/Container'
import TextAreaInput from '../utils/TextAreaInput'
import Btn from '../utils/Btn'
import Dropdown from '../utils/Dropdown'
import { useNavigate } from 'react-router-dom'
import { data } from '../../../data'
import { Link } from 'react-router-dom'
import editFeedbackIcon from "../../images/shared/icon-edit-feedback.svg"
import arrowLeft from "../../images/shared/icon-arrow-left.svg";
import { AppContext } from '../store/AppContext'

const EditFeedback = () => {
    const {currentVisibleSuggestions,setCurrentVisibleSuggestions,productRequests,setProductRequests,currentSuggestionId,suggestions,setInProgressFeatures,setplannedFeatures,setLiveFeatures,setSuggestion}=useContext(AppContext)
    const currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)
    console.log(currentSuggestion)
    const {id,title,description,upvotes,comments, status,category:currentCategory}=currentSuggestion
    const [feedbackTitle,setFeedbackTitle] =useState(title)
    const [feedbackTitltInputTouched,setFeedbackTitleInputTouched] = useState(false)
    const [feedbackDetailInputTouched,setFeedbackDetailInputTouched] = useState(false)
   const [feedbackDetailValue,setFeedbackDetailValue]=useState(description)
   const [category,setCategory]=useState(currentCategory)
   const [feedbackStatus,setFeedbackStatus]=useState(status)
   const navigate = useNavigate();


    const handleFeedbackTitleInputChange=(e) =>{
       setFeedbackTitle(e.target.value)
       setFeedbackTitleInputTouched(true)
    }

    const handleUserSelecteCategory=(selectedValue) => setCategory(selectedValue) 
    const handleUserUpdateStatus=(selectedValue) => setFeedbackStatus(selectedValue)

    const handleFeedbackDetail=(value)=>{
       setFeedbackDetailValue(value)
       setFeedbackDetailInputTouched(true)
   }

   const handleFeedackDeleted=(e)=>{
    e.preventDefault()
    if (feedbackStatus==="suggestion"){
        setSuggestion(suggestions.filter(item=>item.id!==id))
        setCurrentVisibleSuggestions(suggestions.filter(item=>item.id!==id))
    }
  if (feedbackStatus==="planned"){
    setplannedFeatures(prv=> prv.filter(item=>item.id!==id))
  }
  if (feedbackStatus==="live"){
    setLiveFeatures(prv=> prv.filter(item=>item.id!==id))
  }
  if (feedbackStatus==="in-progress"){
    setInProgressFeatures(prv=> prv.filter(item=>item.id!==id))
  }
    navigate('/')

   } 

    const handleFormSubmited=(e)=>{
        e.preventDefault()
       setFeedbackDetailInputTouched(true)
       setFeedbackTitleInputTouched(true)
       if (!feedbackDetailValue || !feedbackTitle) return;
       //first I'll remove the current feedbacj    
       //  now let's create another feedback with the new information assuming that the user has changed sth
       setProductRequests(productRequests.filter(item=>item.id!==id))
       setProductRequests(prv => [...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])
       setProductRequests(prv =>prv.sort((a,b)=>a.id-b.id))
       setSuggestion(prv =>prv.filter(item=>item.id!==id))
       setCurrentVisibleSuggestions(suggestions.filter(item=>item.id!==id))
       if (feedbackStatus==="suggestion") {
           setSuggestion(prv => [...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])
           setCurrentVisibleSuggestions(prv => [...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])
            //  setSuggestion(prv =>prv.sort((a,b)=>a.id-b.id))
            // setCurrentVisibleSuggestions([{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:status,description:feedbackDetailValue,comments}])

       }
        // return
     
       
       if (feedbackStatus==="Planned"){
         setplannedFeatures(prv=>[...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])

       }
       if (feedbackStatus==="In-Progress"){
        setInProgressFeatures(prv=>[...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])
  
        }
       if (feedbackStatus==="Live"){
        setLiveFeatures(prv=>[...prv,{id:id,title:feedbackTitle,category:category.toLowerCase(),upvotes:upvotes,status:feedbackStatus,description:feedbackDetailValue,comments}])
  
        }

      
        // setSuggestion(suggestions.filter(item=>item.id!==id))
     navigate('/')
  }
   
  console.log(feedbackStatus)

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
                        <Dropdown name='FeedbackDropDown' onSaveSelection={handleUserSelecteCategory} className='w-full' defaultOption={category} options={["Feature","UI","UX","Enhancement","Bug"]}/>
                    </div>
               </div>
               {/* form label */}
               <div className='my-6' >
                   <label className='text-base text-greyDarkest font-semibold'>Update Status</label>
                   <p className='text-sm' >Change feature state</p>
                    <div className="input mb-10">
                        <Dropdown name='FeedbackDropDown' onSaveSelection={handleUserUpdateStatus} className='w-full' defaultOption={feedbackStatus} options={["Suggestion","Planned","In-Progress","Live"]}/>
                    </div>
               </div>
                  {/* form label */}

               <div >
                   <label className='text-base text-greyDarkest font-semibold'>Feedback Detail</label>
                   <p className='text-sm'>Include any specific comments on what should be improved, added, etc.</p>
                    <TextAreaInput textAreaValue={description} className={`${( feedbackDetailInputTouched &&  !feedbackDetailValue) ? "border-red border-2" :""}`} onSaveTextAreaValue={handleFeedbackDetail}/>
                   { !feedbackDetailValue && feedbackDetailInputTouched &&  <p className='text-red'>can't be empty</p>}
               </div>
               <div className='flex-row-between mt-10 flex-nowrap '>
                   <Btn onClick={handleFeedackDeleted} className='bg-red mx-3' text="Delete" />
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