import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res);
      setList(res.data.data.films);
    });
  }, []);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
