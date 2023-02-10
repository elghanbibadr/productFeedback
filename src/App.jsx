

import { AppContextProvider } from "./componenet/store/AppContext";
import HomePage from "./componenet/Pages/HomePage";
import Container from "./componenet/utils/Container";
import CommentPage from "./componenet/Pages/CommentPage";
import { AppContext } from "./componenet/store/AppContext";
import { useContext } from "react";
const App=()=>{
    const {isUserSelectedAfeature}=useContext(AppContext)
 return(
          <Container>
       {!isUserSelectedAfeature &&  <HomePage/>}
       {isUserSelectedAfeature && <CommentPage/>}
        </Container>

 )
}


export default App;