import { useCallback, useState } from "react";

const App = () => {
  const [text, settext] = useState("");
  const [list, setlist] = useState(["1", "2", "3"]);
  // 防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次
  const handleAdd = useCallback(() => {
    setlist([...list, text]);
    settext("");
  }, [text, list]);

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
