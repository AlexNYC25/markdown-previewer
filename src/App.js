import React from 'react'
import './App.css';
const marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true
})

function App() {
  const [textAreaValue, setTextAreaValue] = React.useState("")

  let handleTextAreaChange = e => {
    setTextAreaValue(e.target.value)
  }

  return (
    <div className="App container">
      <div>
        <p className="h1">Markdown Previewer</p>
      </div>
      <div className="row ">
        <div className="col-md-6 form-group">
          <textarea 
            id="editor"
            className="form-control"
            rows="12"
            value={textAreaValue}
            onChange={handleTextAreaChange}
          />
        </div>
        <div className="col-md-6">
          <div id="preview-container" className="container">
            <p id="preview" className="text-break">
              {marked(textAreaValue)}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
