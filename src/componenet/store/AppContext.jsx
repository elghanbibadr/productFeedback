
import { createContext,useState,useEffect } from "react";
import { data } from "../../../data";
export const AppContext=createContext(null);


// import data from firebase
export const AppContextProvider=({children})=>{
    const [productRequests,setProductRequests]=useState(data[0].productRequests)
    // const suggestionsArray=productRequests.filter(element=>element.status=="suggestion")
    const plannedArray=productRequests.filter(element=>element.status=="planned")
    const inProgressArray=productRequests.filter(element=>element.status=="in-progress")
    const liveArray=productRequests.filter(element=>element.status=="live")
   const [currentSuggestionId,setCurrentSuggestionId]=useState(undefined)
   const [userSortByChoice,setUserSortByChoice]=useState('Most Upvotes')
     const [suggestions,setSuggestion]=useState(productRequests.filter(element=>element.status=="suggestion"))
   const [filterSuggestionCategory,setFilterSuggestionCategory]=useState('All')  
   const [suggestionNumber,setSuggestionNumber]=useState(suggestions.length)
   const [plannedFeatures,setplannedFeatures]=useState(plannedArray)
    const [inProgressFeatures,setInProgressFeatures]=useState(inProgressArray)
    const [liveFeatures,setLiveFeatures]=useState(liveArray)

    // get the stored data from the local storage
    // set the starting data of product features to local storage
     useEffect(()=>{
        const data=  localStorage.getItem("myData" )
        if (data){
          setProductRequests(JSON.parse(productRequests))
        }
        console.log(data)
     })
     useEffect(()=>{
       localStorage.setItem("myData", JSON.stringify(productRequests))
     })
     
   const value={
       productRequests,
       setProductRequests,
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
       setplannedFeatures,
       inProgressFeatures,
       setInProgressFeatures,
       liveFeatures,
       setLiveFeatures
    
   }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}