import { useState } from "react";

const App = () => {
  const [state, setState] = useState("may");
  return (
    <div>
      <button
        onClick={() => {
          setState("MAY");
        }}
      >
        click
      </button>
      {state}
    </div>
  );
};

export default App;
