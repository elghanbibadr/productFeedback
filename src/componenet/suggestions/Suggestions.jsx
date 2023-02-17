import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { AppContext } from '../store/AppContext';
import Card from '../utils/Card';
import NoFeedbackCard from './NoFeedbackCard';

const Suggestions = () => {

  const { userSortByChoice ,setSuggestionNumber, filterSuggestionCategory , suggestions} = useContext(AppContext)
  const [currentVisibleSuggestions,setCurrentVisibleSuggestions]=useState(suggestions)

  useEffect(()=>{
    if (filterSuggestionCategory==='All'){
      setCurrentVisibleSuggestions(suggestions)
      setSuggestionNumber(suggestions.length)
     return;
    }
    const filteredSuggestions =suggestions.filter(element => element.category===filterSuggestionCategory.toLowerCase())
    setCurrentVisibleSuggestions(filteredSuggestions)
    setSuggestionNumber(filteredSuggestions.length)
  },[filterSuggestionCategory])
  

  useEffect(()=>{
     sortItems()
   },[userSortByChoice])

  const sortItems=()=>{
   const sorted=currentVisibleSuggestions.map(item => Object.assign({}, item)).sort((a,b)=> {
     if (userSortByChoice.toLowerCase()==="least upvotes" )  {
      return a.upvotes - b.upvotes
     } 
     if (userSortByChoice.toLowerCase()==="most upvotes" )  {
      return b.upvotes - a.upvotes
     } 
      if (userSortByChoice.toLowerCase()==="most comments" )  {
       return b.comments.length - a.comments.length
      } 
       return a.comments.length - b.comments.length
      
    
   })
   setCurrentVisibleSuggestions(sorted)
  }


   


  return (
    <div className='mt-6'>
       { currentVisibleSuggestions.map(({ id, description,category, title, upvotes, comments }, index) => {
        return <SuggestionCard key={index} id={id} upvotes={upvotes} category={category} commentsLength={comments ? comments.length : 0} description={description} title={title}  />
      })} 
      {currentVisibleSuggestions.length===0 && <NoFeedbackCard/>}
    </div>
  )
}

export default Suggestions




































