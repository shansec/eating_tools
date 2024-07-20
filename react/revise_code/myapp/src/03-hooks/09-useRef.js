import { useRef, useState } from "react";

const App = () => {
  const [list, setlist] = useState(["1", "2", "3"]);
  const myRef = useRef();

  const handleAdd = () => {
    let text = myRef.current.value;
    setlist([...list, text]);
    myRef.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
