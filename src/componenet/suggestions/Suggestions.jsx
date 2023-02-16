import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { AppContext } from '../store/AppContext';
import { data } from '../../../data';

const Suggestions = () => {
  console.log(data)
  const { userSortByChoice } = useContext(AppContext)
  const { productRequests, setProductRequests } = useContext(AppContext)

   useEffect(()=>{
     sortItems()
   },[userSortByChoice])

  const sortItems=()=>{
   const sorted=data[0].productRequests.map(item => Object.assign({}, item)).sort((a,b)=> {
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
   setProductRequests(sorted)
  }

   


  return (
    <div className='p-4'>
       { productRequests.map(({ id, description,category, title, upvotes, comments }, index) => {
        return <SuggestionCard key={index} id={id} upvotes={upvotes} category={category} commentsLength={comments ? comments.length : 0} description={description} title={title}  />
      })} 
    </div>
  )
}

export default Suggestions




































