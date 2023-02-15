import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { AppContext } from '../store/AppContext';
import { data } from '../../../data';

const Suggestions = () => {
  const { userSortByChoice } = useContext(AppContext)
  const { productRequests, setProductRequests } = useContext(AppContext)
  // const [isLoading, setIsLoading] = useState(true);

   useEffect(()=>{
     sortItems()
   },[userSortByChoice])

  const sortItems=()=>{
   const sorted=data[0].productRequests.sort((a,b)=> ( userSortByChoice.toLowerCase()==="least upvotes" ) ?  b.upvotes - a.id :a.upvotes - b.upvotes);
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




































