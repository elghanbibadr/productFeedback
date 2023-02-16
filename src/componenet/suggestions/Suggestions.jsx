import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { AppContext } from '../store/AppContext';
import { data } from '../../../data';

const Suggestions = () => {

  const { userSortByChoice } = useContext(AppContext)
  const {  setSuggestion, setProductRequests ,suggestions} = useContext(AppContext)
   useEffect(()=>{
     sortItems()
   },[userSortByChoice])

  const sortItems=()=>{
   const sorted=suggestions.map(item => Object.assign({}, item)).sort((a,b)=> {
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
   setSuggestion(sorted)
  }

   


  return (
    <div className='p-4'>
       { suggestions.map(({ id, description,category, title, upvotes, comments }, index) => {
        return <SuggestionCard key={index} id={id} upvotes={upvotes} category={category} commentsLength={comments ? comments.length : 0} description={description} title={title}  />
      })} 
    </div>
  )
}

export default Suggestions




































