import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("may");

  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]);

  return (
    <div>
      app-{name}
      <button
        onClick={() => {
          setName("shansec");
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
