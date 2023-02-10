import React,{useContext, useEffect, useState} from 'react'
import SuggestionCard from './SuggestionCard'
import { ref,onValue } from "firebase/database";
import startFireBase from '../../../firebaseconfig';
import { AppContext } from '../store/AppContext';
import LoadingSpinner from '../utils/LoadingSpinner';
import AddComment from '../comments/AddComment';
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
      <AddComment/>
      {!isLoading &&  productRequests.map(({id,description,title,upvotes})=>{
       return <SuggestionCard key={id} description={description} title={title} upvotes={upvotes} />

      })}
      {isLoading &&  <LoadingSpinner/>}
      </div>
  )
}

export default Suggestions