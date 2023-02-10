
import { createContext,useState } from "react";


export const AppContext=createContext(null);


export const AppContextProvider=({children})=>{
   const [productRequests,setProductRequests]=useState()

    const value={
       productRequests,
       setProductRequests
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}