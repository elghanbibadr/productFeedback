
import { createContext,useState,useEffect } from "react";
import { data } from "../../../data";
export const AppContext=createContext(null);


// import data from firebase
export const AppContextProvider=({children})=>{
    const [productRequests,setProductRequests]=useState(data[0].productRequests)
    const suggestionsArray=productRequests.filter(element=>element.status=="suggestion")
   const [isUserSelectedAfeature,setIsUserSelectedAFeature]=useState(false)
   const [currentSuggestionId,setCurrentSuggestionId]=useState(undefined)
   const [userSortByChoice,setUserSortByChoice]=useState('Most Upvotes')
     const [suggestions,setSuggestion]=useState(suggestionsArray)
   const [filterSuggestionCategory,setFilterSuggestionCategory]=useState('all')  
   const [suggestionNumber,setSuggestionNumber]=useState(suggestions.length)
   const value={
       productRequests,
       setProductRequests,
       isUserSelectedAfeature,
       setIsUserSelectedAFeature,
       currentSuggestionId,
       setCurrentSuggestionId,
       userSortByChoice,
       setUserSortByChoice,
       suggestions,
       setSuggestion,
       suggestionNumber,
       setSuggestionNumber,
       filterSuggestionCategory,
       setFilterSuggestionCategory
    
   }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}