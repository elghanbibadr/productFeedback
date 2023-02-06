import Btn from "./componenet/utils/Btn";

const App=()=>{
 return(
 <>
 <p>
 Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean
 </p>
 <h1 className="text-black flex flex-col">hello world</h1>
 {/* <button className="btn-primary">save </button> */}
 <h1>There is no feedback yet.</h1>
 <h2>Frontend Mentor</h2>
 <h3>Roadmap</h3>
 <Btn className='bg-black ' text='Add Feedback' />
 </>
 )
}


export default App;