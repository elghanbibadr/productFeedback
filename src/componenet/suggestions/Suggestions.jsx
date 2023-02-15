
import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { ref, onValue } from "firebase/database";
import startFireBase from '../../../firebaseconfig';
import { AppContext } from '../store/AppContext';
import LoadingSpinner from '../utils/LoadingSpinner';
import { useForceUpdate } from 'framer-motion';

const Suggestions = () => {
  const { userSortByChoice } = useContext(AppContext)
  const { productRequests, setProductRequests } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true);
 const [sortedProductRequests,setSortedProductRequests] = useState(undefined)

  useEffect(() => {
    setIsLoading(true);
    const db = startFireBase();
    onValue(ref(db, 'productRequests/'), async (snapshot) => {
      let data = await snapshot.val()
      setProductRequests(data)
      // setSortedProductRequests(data.sort((a,b)=> a.upvotes-b.upvotes))
      setIsLoading(false)
    }
    )
   
  }, []);  

  useEffect(()=>{
    if( productRequests){
    sortItems()
    }
  },[userSortByChoice,productRequests])

  const sortItems=()=>{
   const sorted=productRequests.sort((a,b)=>userSortByChoice.toLowerCase()==="least upvotes" ?  b.upvotes-a.upvotes :a.upvotes-b.upvotes)
   setSortedProductRequests(sorted)
  }

//   if ( !isLoading ){
//     // sort the product requests by the option selected on the dropdown
//      sortedProductRequests =productRequests.sort((a,b)=>{
//      if (userSortByChoice.toLowerCase()==='most upvotes') {
//       console.log(true)
//        return a.upvotes-b.upvotes
//      }
//      if (userSortByChoice.toLowerCase()==='least upvotes') {
//        return b.upvotes-a.upvotes
     
//   }
//  })}

console.log(sortedProductRequests)

  return (
    <div className='p-4'>
      {!isLoading && sortedProductRequests && sortedProductRequests.map(({ id, description, title, upvotes, comments }, index) => {
        return <SuggestionCard key={index} id={id} commentsLength={comments ? comments.length : 0} description={description} title={title} upvotes={upvotes} />

      })}
      {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default Suggestions




































