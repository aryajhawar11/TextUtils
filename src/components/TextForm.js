import React,{useState} from 'react';


export default function TextForm(props) {

const[text,setText]= useState(" ");
// setText("newText")

const handleUpClick=()=>{
    console.log("Uppercase btn was clicked"+ text)
    setText(text.toUpperCase())
    props.showAlert("converted to UPPERCASE","success")

}
const handleLowClick=()=>{
    console.log("lowercase btn was clicked"+ text)
    setText(text.toLowerCase())
    props.showAlert("converted to lowercase","success")

}

const handleOnchange=(event)=>{
    console.log("on change")
    setText(event.target.value)

}
return(
  <>
    <div className='container' style={{color:props.mode==='light'?'#343a40':'white'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" style={{backgroundColor:props.mode==='dark'?'#343a40':'white'}}>Enter text</label>
    <input type="email" className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'light'}} onChange={handleOnchange} id="exampleInputEmail1" aria-describedby="emailHelp" /> 
  </div>
 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
</div>


<div className="container my-3" style={{color:props.mode==='light'?'#343a40':'white'}}>
  <h1>Your text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes to read </p>
  <h3>PREVIEW</h3>
  <p>{text}</p>
</div>
</>

)

}