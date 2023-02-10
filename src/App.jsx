

import { AppContextProvider } from "./componenet/store/AppContext";
import HomePage from "./componenet/Pages/HomePage";
import Container from "./componenet/utils/Container";
import CommentPage from "./componenet/Pages/CommentPage";
const App=()=>{
 return(
    <AppContextProvider>
        <Container>
        <HomePage/>
        <CommentPage/>
        </Container>

    </AppContextProvider>
 )
}


export default App;