import React , {useState} from 'react'

export default function Textform(props) {  
    const handleUpClick = () =>{ 
        let newText = text.toUpperCase(); 
        setText (newText)
    }    
    

    const handlelpClick = () =>{ 
        let newText = text.toLowerCase(); 
        setText (newText)
    } 
    
    const handleclear = () =>{ 
        let newText = ""; 
        setText (newText)
    }  


    const handleOnChange = (event) =>{
 
        setText(event.target.value);
    }
    const [ text ,  setText ] = useState("");
    return ( 
        <>
        <div className='Container'>
             <h1>{props.heading}</h1>
            <div className="mb-3"> 
            
        
                <textarea className="form-control" value={text} onChange={handleOnChange} id="MYBOX" rows="12"></textarea> 

            </div> 
            
            <button className="btn btn-primary mx-3" onClick={handleUpClick} mx-10 >Conver to Upper Case</button> 
            <button className="btn btn-primary mx-3" onClick={handlelpClick}  >Conver to Lower Case</button> 
            <button className="btn btn-primary mx-3" onClick={handleclear}  >Clear</button>
        </div>  
        <div className="Container " >
            <h1>Your Text Summery</h1>
            <p> {text.split(" ").length}Words and , {text.length} charactor</p> 
            <p> {text} Preview</p>
            
            
            
            </div> 
        </>
         
    )
}

