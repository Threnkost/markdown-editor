import logo from './logo.svg';
import './App.css';
import './markdown_style.css';

import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Header from './Header.js';
import Sidebar from './Sidebar.js';
import {ThemeContextProvider} from './ThemeContextProvider';

const App = () => {

  const [markdownText, setMarkdownText] = useState("");

  const SectionTitle = styled.p`
    font-size: 14px;
    color: #C1C4CB;
    font-weight: 500;
    letter-spacing: 2px;
  `;

  const handleInput = (e) => {
    setMarkdownText(e.target.value);
  }

  return (
    <div className="grid-layout">
      <Header />
      
      <div className="markdown-editor">
        <section>
          <SectionTitle>MARKDOWN</SectionTitle>
        </section>

        <textarea spellCheck={false} value={markdownText} onChange={handleInput} />
      </div>

      <div className="markdown-preview">
        <section>
          <SectionTitle>PREVIEW</SectionTitle>
        </section>

        <div className="preview-area">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
