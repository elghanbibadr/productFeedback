
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RoadmapPage from "./componenet/Pages/RoadmapPage";
import MainPage from "./componenet/Pages/MainPage";
import CommentPage from "./componenet/Pages/CommentPage";
import NewFeedback from "./componenet/Pages/NewFeedback";
import EditFeedback from "./componenet/Pages/EditFeedback";


const router=createBrowserRouter([
   {path:'/',element:<MainPage/>},
   {path:'/comment',element:<CommentPage/>},
   {path:'/roadpmap',element:<RoadmapPage/>},
   {path:'/newfeedback',element:<NewFeedback/>},
   {path:'/editfeedback',element:<EditFeedback/>},
])


const App=()=>{
 return(
   <RouterProvider router={router}></RouterProvider>
 )
}


export default App;