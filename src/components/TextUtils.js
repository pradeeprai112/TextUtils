import React, { useState } from "react";
import Button from "./Button";
import TextAreaInput from "./TextAreaInput";

function TextUtils() {
  // Destructuring state
  const [data, setData] = useState("");

  // Convert to uppercase
  const handleUpChange = () => {
    let newText = data.toUpperCase();
    setData(newText);
  };

  // Convert to lowercase
  const handleLoChange = () => {
    let newText = data.toLowerCase();
    setData(newText);
  };

  // Clear text with confirmation
  const handleClear = () => {
    let text = "If you click on 'Ok' then your text is gone.";
    if (window.confirm(text)) {
        setData("");
    };
  };

  // Handle text area change
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // Handle text area copy
  const handleCopy = () => {
    console.log("copied function");
    navigator.clipboard.writeText(data);
  };

  // Calculate word count
  const wordCount = data.split(/\s+/).filter((word) => word !== "").length;

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <div className="row">
            <div className="col-12">
              <TextAreaInput id={1} text="Enter Your Text"  rows="5" value={data} functionName={handleChange}/>
              <div className="my-3">
                Characters: {data.length} Word Count: {wordCount}
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <Button functionName={handleUpChange} text={'Uppercase'}/>
              <Button functionName={handleLoChange} text={'Lowercase'}/>
              <Button functionName={handleCopy} text={'Copy to Clipboard'}/>
              <Button functionName={handleClear} text={'Clear'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextUtils;
