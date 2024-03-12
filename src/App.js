import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const outputRef = useRef(null);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    updateCounts(newText);
  };

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    updateCounts(newText);
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    updateCounts(newText);
  };

  const handleClear = () => {
    setText('');
    setWordCount(0);
    setCharCount(0);
  };

  const handleCopy = () => {
    if (outputRef.current) {
      outputRef.current.select();
      document.execCommand('copy');
    }
  };

  const updateCounts = (newText) => {
    const words = newText.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
    setCharCount(newText.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Utility App</h1>
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className="buttons">
          <button onClick={handleUpperCase}>Convert to Uppercase</button>
          <button onClick={handleLowerCase}>Convert to Lowercase</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleCopy}>Copy Text</button>
        </div>
        <p>Your modified text:</p>
        <textarea
          ref={outputRef}
          className="output"
          readOnly
          value={text}
        ></textarea>
        <p>Number of words: {wordCount}</p>
        <p>Number of characters: {charCount}</p>
      </header>
    </div>
  );
}

export default App;
