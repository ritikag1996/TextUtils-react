import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleupclick=(event)=>{
    let newText = text.toUpperCase();
    setText(newText);
    event.preventDefault();
    props.showAlert("Text converted to upperCase","success")
  }
  const handleupChange =(event)=>{
    setText(event.target.value)
  }
   const handleloclick=(event)=>{
    let newText=text.toLowerCase();
    setText(newText);
 event.preventDefault();
 props.showAlert("Text converted to lowerCase","success")
   }
  const [text, setText] = useState('');

 const handleCopy=(event)=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value)
  event.preventDefault();
  props.showAlert("Text copied","success")

 }
 const handleSpace=(event)=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  event.preventDefault();
  props.showAlert("Extra spaces removed","success")
 }
 const clearText=(event)=>{
  setText("");
  event.preventDefault();
  props.showAlert("Text cleared","success")
 }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <form>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleupChange} id="myBox" rows="8"></textarea>
  </div>
  

 <button className="btn btn-primary mx-2" onClick={handleupclick}> Convert to uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleloclick}> Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
 <button className="btn btn-primary mx-2" onClick={handleSpace}> Remove Extra space</button>
 <button className="btn btn-primary mx-2" onClick={clearText}> clear Text</button>
</form>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
    </div>
    </>
  )
}
