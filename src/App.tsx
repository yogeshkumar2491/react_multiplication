import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1),
    [multiplyValue, setMultiplyValue] = useState(1),
    multipliedValue = value * multiplyValue,
    multiplierArray = useMemo(
      () => Array.from({ length: 100 }, (v, k) => k + 1),
      []
    );

  const style = {
    padding: "15px",
    "border-radius": "10px",
    background: "rosybrown",
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            onClick={() => setValue(value + 1)}
            className="multilpy-button"
          >
            Click to multiply by multiplier - {multiplyValue}
          </button>
          <span style={{ padding: "10px" }}>
            <select
              style={style}
              onChange={(e): void => setMultiplyValue(parseInt(e.target.value))}
            >
              {multiplierArray.map((element) => (
                <option>{element}</option>
              ))}
            </select>
          </span>
        </div>

        <div>
          <h1>Multiplicand: {value}</h1>
        </div>
        <span style={{ padding: "15px" }}>Product: {multipliedValue}</span>
      </header>
    </div>
  );
}

export default App;
