import React,{useContext, useEffect, useState} from 'react'
import SuggestionCard from './SuggestionCard'
import { ref,onValue } from "firebase/database";
import startFireBase from '../../../firebaseconfig';
import { AppContext } from '../store/AppContext';


const Suggestions = () => {
  
  const {productRequests,setProductRequests}=useContext(AppContext) 
  const [isLoading,setIsLoading] = useState(true);

   useEffect(() => {
    setIsLoading(true);
     const db =startFireBase();
   onValue(ref(db, 'productRequests/' ),async (snapshot)=>  {
     let  data= await snapshot.val()
     setProductRequests(data)
     setIsLoading(false)
    }
  )
 }, []);


  return (
    <div className='p-4'>
      {!isLoading &&  productRequests.map(({id,description,title,upvotes})=>{
       return <SuggestionCard key={id} description={description} title={title} upvotes={upvotes} />

      })}
      </div>
  )
}

export default Suggestions