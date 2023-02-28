import { createContext, useState, useEffect } from "react";
import { data } from "../../../data";
export const AppContext = createContext(null);




export const AppContextProvider = ({ children }) => {
  const [productRequests, setProductRequests] = useState(data[0].productRequests)
  const inProgressArray = productRequests.filter(element => element.status == "in-progress")
  const [currentSuggestionId, setCurrentSuggestionId] = useState(undefined)
  const [userSortByChoice, setUserSortByChoice] = useState('Most Upvotes')
  const [suggestions, setSuggestion] = useState(productRequests.filter(element => element.status == "suggestion"))
  const [filterSuggestionCategory, setFilterSuggestionCategory] = useState('All')
  const [suggestionNumber, setSuggestionNumber] = useState(suggestions.length)
  const [plannedFeatures, setplannedFeatures] = useState(productRequests.filter(element => element.status == "planned"))
  const [inProgressFeatures, setInProgressFeatures] = useState(inProgressArray)
  const [liveFeatures, setLiveFeatures] = useState(productRequests.filter(element => element.status == "live"))

   
   useEffect(() => {
       localStorage.setItem("myData", JSON.stringify(suggestions))
     },[])

    //  useEffect(() => {
    //   const data = localStorage.getItem("myData")
    //   if (data){
    //     setProductRequests(JSON.parse(data))
    //   }
    //  },[])
     

  const value = {
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