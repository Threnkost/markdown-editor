import logo from './logo.svg';
import './App.css';
import './markdown_style.css';

import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';


const App = () => {

  const [markdownText, setMarkdownText] = useState("");

  const handleInput = (e) => {
    setMarkdownText(e.target.value);
  }

  return (
    <div className="grid-layout">
      <header>
        
      </header>

      <div className="markdown-editor">
        <section>
          <p className="section-title">MARKDOWN</p>
        </section>

        <textarea value={markdownText} onChange={handleInput} />
      </div>

      <div className="markdown-preview">
        <section>
          <p className="section-title">PREVIEW</p>
        </section>

        <div className="preview-area">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
