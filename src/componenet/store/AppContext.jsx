
import { createContext,useState,useEffect } from "react";

export const AppContext=createContext(null);


// import data from firebase


export const AppContextProvider=({children})=>{
   const [productRequests,setProductRequests]=useState(undefined)
   const [isUserSelectedAfeature,setIsUserSelectedAFeature]=useState(false)
    const value={
       productRequests,
       setProductRequests
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}