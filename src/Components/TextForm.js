import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("Upppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
}
const handleLowClick = () => {
    // console.log("Upppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
}
const handleClearClick = () => {
    // console.log("Upppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text!", "success");
}
const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
}

const [text, setText] = useState("");
  return (
    <div>
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea class="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#505050':'#505050'}} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-success mx-3' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-danger mx-3' onClick={handleClearClick}>Clear</button>

            </div>
            <div className='container my-3'>
                <h2>
                    Your text summary
                </h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes read</p>
                <h2>Preview here</h2>
                <p>{text.length>0?text:"Enter Something to Preview it Here"}</p>
                
                
                
                

            </div>
        </>
    </div>
  )
}
 





















































































































































































































