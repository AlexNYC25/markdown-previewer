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

  let defaultText = "# Structured documents Sometimes it's useful to have different levels of headings to structure your documents.\n\nStart lines with a `#` to create headings. Multiple `##` in a row denote smaller heading sizes.\n\n### This is a third-tier heading You can use one `#` all the way up to `######` six for different heading sizes.\n\nIf you'd like to quote someone, use the > character before the line: > Coffee. The finest organic suspension ever devised... I beat the Borg with it\n\n> - Captain Janeway\n\nIt's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)"

  if(textAreaValue === ""){
    setTextAreaValue(defaultText);
  }
  
  return (
    <div className="App container">
      <div>
        <p className="h1">Markdown Previewer</p>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <p className="h2">GitHub Markdown</p>
          <textarea 
            id="editor"
            className="form-control"
            rows="12"
            value={textAreaValue}
            onChange={handleTextAreaChange}
          />
        </div>
        <div className="col-md-6">
          <p class="h2">HTML</p>
          <div id="preview-container" className="container">
            <p id="preview" className="text-break">
              {marked(textAreaValue)}
            </p>
          </div>
          
        </div>
        <div className="col-md-12 py-5 pb-4">
          
          <a
            href="https://repl.it/"
            rel="noreferrer"
            target="_blank"
            className="btn btn-dark"
          >
            Test on repl.it
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;
