import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { AppContext } from '../store/AppContext';

const Suggestions = () => {

  const { userSortByChoice } = useContext(AppContext)
  const { productRequests,filterSuggestionCategory ,suggestions} = useContext(AppContext)
  const [currentVisibleSuggestions,setCurrentVisibleSuggestions]=useState(suggestions)

  useEffect(()=>{
    if (filterSuggestionCategory==='All'){
      setCurrentVisibleSuggestions(suggestions)
     return;
    }
    const filteredSuggestions =suggestions.filter(element => element.category===filterSuggestionCategory.toLowerCase())
    setCurrentVisibleSuggestions(filteredSuggestions)
    console.log(filteredSuggestions)
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

  console.log(filterSuggestionCategory)

   


  return (
    <div className='p-4'>
       { currentVisibleSuggestions.map(({ id, description,category, title, upvotes, comments }, index) => {
        return <SuggestionCard key={index} id={id} upvotes={upvotes} category={category} commentsLength={comments ? comments.length : 0} description={description} title={title}  />
      })} 
    </div>
  )
}

export default Suggestions




































