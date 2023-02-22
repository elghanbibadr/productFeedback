
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RoadmapPage from "./componenet/Pages/RoadmapPage";
import MainPage from "./componenet/Pages/MainPage";
import CommentPage from "./componenet/Pages/CommentPage";
import NewFeedback from "./componenet/Pages/NewFeedback";
const router=createBrowserRouter([
   {path:'/',element:<MainPage/>},
   {path:'/comment',element:<CommentPage/>},
   {path:'/roadpmap',element:<RoadmapPage/>},
   {path:'/newFeedback',element:<NewFeedback/>},
])
const App=()=>{
 return(
   <RouterProvider router={router}></RouterProvider>
 )
}


export default App;