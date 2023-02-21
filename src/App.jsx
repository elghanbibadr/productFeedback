


import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RoadmapPage from "./componenet/Pages/RoadmapPage";
import MainPage from "./componenet/Pages/MainPage";
import CommentPage from "./componenet/Pages/CommentPage";
const router=createBrowserRouter([
   {path:'/',element:<MainPage/>},
   {path:'/comment',element:<CommentPage/>},
   {path:'/roadpmap',element:<RoadmapPage/>},
])
const App=()=>{
 return(
   <RouterProvider router={router}></RouterProvider>
 )
}


export default App;