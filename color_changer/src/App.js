import { useState } from "react";
import "./App.css";

function App() {
  const [colorName, setColorName] = useState("");
  return (
    <>
      <div className="Square" style={{ backgroundColor: colorName }}>
        {colorName ? colorName : "Empty Value"}
      </div>
      <input
        autoFocus
        type="text"
        placeholder="Please Enter Color Name."
        required
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
    </>
  );
}

export default App;
