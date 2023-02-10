import React from 'react'
import SuggestionCard from './SuggestionCard'
import { ref,onValue } from "firebase/database";
import startFireBase from '../../../firebaseconfig';

const Suggestions = () => {
  const db = startFireBase();
  const starCountRef = ref(db, 'productRequests/' );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
  });
   


  

  return (
    <div className='p-4'>
    <SuggestionCard />
    </div>
  )
}

export default Suggestions