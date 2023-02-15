
import { createContext,useState,useEffect } from "react";
import { data } from "../../../data";
export const AppContext=createContext(null);


// import data from firebase
export const AppContextProvider=({children})=>{
   const [productRequests,setProductRequests]=useState(data[0].productRequests)
   const [isUserSelectedAfeature,setIsUserSelectedAFeature]=useState(false)
   const [currentSuggestionId,setCurrentSuggestionId]=useState(undefined)
   const [userSortByChoice,setUserSortByChoice]=useState('Most Upvotes')
   const value={
       productRequests,
       setProductRequests,
       isUserSelectedAfeature,
       setIsUserSelectedAFeature,
       currentSuggestionId,
       setCurrentSuggestionId,
       userSortByChoice,
       setUserSortByChoice
   }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}