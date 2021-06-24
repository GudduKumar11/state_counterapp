import React, { useState } from "react";
import "./App.css";
import "./index.css";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Create Couter Appp with Hooks/state</h1>
      <h2>The value of the count is {count}</h2>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increamet
      </button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decreament
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button
        onClick={() =>
          count >= 100 ? "" : setCount(count + Math.floor(Math.random() * 10))
        }
      >
        Random Number1
      </button>
    </div>
  );
};

export default App;
