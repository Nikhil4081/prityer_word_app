import './App.css';
import Bar from './Components/bar'; 
import Textform from './Components/Textform';   
import About from './Components/About';



function App() {
  return ( 
    <>
  
   <Bar title = "pritier words" />  
 <div className="container"  > <Textform  heading =' Enter Your Text Here...!!' /></div> 
 <About/>
    </> 
  );
}

export default App;
 