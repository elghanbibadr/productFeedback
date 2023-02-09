
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFireBase() {
const firebaseConfig = {
    apiKey: "AIzaSyCFq20xQB-8h4AXzyKYBDp7dH3qHkLDyfY",
   authDomain: "first-project-88f95.firebaseapp.com",
   projectId: "first-project-88f95",
    storageBucket: "first-project-88f95.appspot.com",
     databaseUrl:'https://first-project-88f95-default-rtdb.firebaseio.com/',
     messagingSenderId: "255067908661",
     appId: "1:255067908661:web:f8f8ecafdf5c06ef3c1f7c",
     measurementId: "G-J031L4ZD4V"
   };

  

  const app= initializeApp(firebaseConfig);
   return  getDatabase(app);

}



export default startFireBase;