import React from 'react';
import ReactDOM from 'react-dom';
import ClickToEdit from "react-click-to-edit"

const InputField = () => (
  <div wrapperClass="wrapperClass">
  <ClickToEdit
    /*
      String className to be applied to wrapper the input and text element.
    */
    wrapperClass="wrapperClass"
    /*
      String className to be applied to the input element.
    */
    inputClass="inputClass"
    /*
      String className to be applied to the text element.
    */
    textClass="textClass"
    /*
      String value to be applied to the input and text element.
    */
    value={value}
    /*
      Function that will be called after the input element lose focus or press carriage return.
    */
    endEditing={() => {
      console.log('Success!')
    }}
  />
    <p inputClass="inputClass" textClass="textClass">Click here to edit</p>
    <input inputClass="inputClass" value={value} />
  </div>
)

ReactDOM.render(<InputField />, document.getElementById('app'));
