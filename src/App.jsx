import Header from "./componenet/Header/Header";
import Suggestions from "./componenet/suggestions/Suggestions";
import SuggestionBar from "./componenet/Header/SuggestionBar/SuggestionBar";
const App=()=>{
 return(
 <div className="md:container lg:grid grid-cols-3  lg:pt-20 ">
<Header className=' lg:w-3/4 xl:w-7/12 lg:p-0 lg:justify-self-center' />  
<main className="lg:col-span-2">
    <SuggestionBar />
    <Suggestions />
</main>
 </div>
 )
}


export default App;