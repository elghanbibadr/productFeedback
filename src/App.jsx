

import { AppContextProvider } from "./componenet/store/AppContext";
import HomePage from "./componenet/Pages/HomePage";
import Container from "./componenet/utils/Container";
import CommentPage from "./componenet/Pages/CommentPage";
import { AppContext } from "./componenet/store/AppContext";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useContext } from "react";
import RoadmapPage from "./componenet/Pages/RoadmapPage";
import MainPage from "./componenet/Pages/MainPage";
const router=createBrowserRouter([
   {path:'/',element:<MainPage/>},
   {path:'/roadpmap',element:<RoadmapPage/>},
])
const App=()=>{
 return(
   <RouterProvider router={router}></RouterProvider>
 )
}


export default App;