import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';



function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate an API call to get AI-generated response
    setResponse("Here are some recommended mutual funds: [Fund A](#), [Fund B](#), [Fund C](#).");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GenAI-Powered Financial Assistant</h1>
        <div className="chat-container">
          <div className="input-panel">
            <h2>User Input</h2>
            <input
              type="text"
              placeholder="What are the best mutual funds for beginners?"
              value={userInput}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div className="response-panel">
            <h2>AI-Generated Response</h2>
            <p>{response}</p>
          </div>
        </div>
        <div className="dashboard">
          <h2>Personalized Recommendations</h2>
          <ul>
            <li>Investment Summary: $10,000 in diversified funds</li>
            <li>Top Recommendations: Fund A, Fund B, Fund C</li>
            <li>Market Trends: Positive growth in sectors A and B</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

export default App;
