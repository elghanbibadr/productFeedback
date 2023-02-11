import React,{useContext, useEffect, useState} from 'react'
import SuggestionCard from './SuggestionCard'
import { ref,onValue } from "firebase/database";
import startFireBase from '../../../firebaseconfig';
import { AppContext } from '../store/AppContext';
import LoadingSpinner from '../utils/LoadingSpinner';

const Suggestions = () => {
  
  const {productRequests,setProductRequests}=useContext(AppContext) 
  const [isLoading,setIsLoading] = useState(true);

   useEffect(() => {
    setIsLoading(true);
     const db =startFireBase();
   onValue(ref(db, 'productRequests/' ),async (snapshot)=>  {
     let  data= await snapshot.val()
     console.log(data)
     setProductRequests(data)
     setIsLoading(false)
    }
  )
 }, []);


  return (
    <div className='p-4'>
      {!isLoading &&  productRequests.map(({id,description,title,upvotes,comments},index)=>{
        return <SuggestionCard   key={index} id={id}   commentsLength={comments ? comments.length : 0}   description={description} title={title} upvotes={upvotes} />

      })}
      {isLoading &&  <LoadingSpinner/>}
      </div>
  )
}

export default Suggestions