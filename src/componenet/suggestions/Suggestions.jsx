import React from 'react'
import SuggestionCard from './SuggestionCard'
import { getDatabase,ref,onValue } from "firebase/database";



 import startFireBase from '../../../firebaseconfig';
// import { ref,onValue } from 'firebase/database';
// const db = startFireBase();
const Suggestions = () => {
  const db = startFireBase();
const starCountRef = ref(db, 'productRequests/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
});
 
//      console.log(startFireBase())
    
// const dbRef=ref(db,'currentUser');
// onValue(dbRef,(snapshot)=>{
// snapshot.forEach(child=>{
//   let keyName=child.key;
//   let data=child.val()
//   console.log(data)
// })
// })

  

  return (
    <div className='p-4'>
    <SuggestionCard />
    </div>
  )
}

export default Suggestions