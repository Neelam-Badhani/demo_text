import React,{useState} from 'react'


export default function TextForm(props){
    const handleUpClick= ()=>{
        console.log("uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upprercase","sucess");
    }

    const handleLOClick= ()=>{
        console.log("uppercase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","sucess");
    }
    const handleOnChange = (event)=>{
        console.log("on chnage");
         setText(event.target.value);
        
    }
    const [text, setText]=useState('Enter text here');
    return(
        <>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h1 >{props.heading}</h1>
<div className="mb-3">
<label for="myBox" class="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert to UpperCase</button>
</div>
<div className="container"style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the text for preview"}</p>
    </div>
    </>
    )
}