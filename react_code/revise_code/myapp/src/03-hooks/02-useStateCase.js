import { useState } from "react";

const App = () => {
  const [text, settext] = useState("");
  const [list, setlist] = useState(["1", "2", "3"]);

  const handleAdd = () => {
    console.log(text);
    setlist([...list, text]);
    settext("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
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
