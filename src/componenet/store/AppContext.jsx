
import { createContext,useState,useEffect } from "react";
import { data } from "../../../data";
export const AppContext=createContext(null);


// import data from firebase
export const AppContextProvider=({children})=>{
    const [productRequests,setProductRequests]=useState(data[0].productRequests)
    const suggestionsArray=productRequests.filter(element=>element.status=="suggestion")
    const plannedArray=productRequests.filter(element=>element.status=="planned")
    const liveArray=productRequests.filter(element=>element.status=="live")
   const [isUserSelectedAfeature,setIsUserSelectedAFeature]=useState(false)
   const [currentSuggestionId,setCurrentSuggestionId]=useState(undefined)
   const [userSortByChoice,setUserSortByChoice]=useState('Most Upvotes')
     const [suggestions,setSuggestion]=useState(suggestionsArray)
   const [filterSuggestionCategory,setFilterSuggestionCategory]=useState('All')  
   const [suggestionNumber,setSuggestionNumber]=useState(suggestions.length)
   const [plannedFeatures,setplannedFeatures]=useState(plannedArray)
    
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
       setFilterSuggestionCategory,
       plannedFeatures,
       setplannedFeatures
    
   }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}