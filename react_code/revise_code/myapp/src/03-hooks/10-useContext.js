import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../02-advanced/components/Film/Film.css";

const GlobalContext = React.createContext();

const Film = (props) => {
  let { name, poster, grade, nation, runtime, synopsis } = props;
  const value = useContext(GlobalContext);
  return (
    <div
      className="film-box"
      onClick={() => {
        value.changeInfo(synopsis);
      }}
    >
      <img className="img-item" src={poster} alt="" />
      <div className="div-item">
        <span>{name}</span>
        <span>观众评分：{grade}分</span>
        <span>
          {nation}|{runtime}分钟
        </span>
      </div>
    </div>
  );
};

const FilmDetail = () => {
  const value = useContext(GlobalContext);
  return (
    <div style={{ background: "yellow", width: "300px", height: "300px" }}>
      电影简介：{value.info}
    </div>
  );
};

const App = () => {
  const [cinemaList, setCinemaList] = useState([]);
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios.get("/test.json").then((res) => {
      setCinemaList(res.data.data.films);
    });
  }, [cinemaList]);

  return (
    <GlobalContext.Provider
      value={{
        call: "打电话",
        sms: "短信",
        info: info,
        changeInfo: (value) => {
          setInfo(value);
        },
      }}
    >
      <div>
        {cinemaList.map((cinema) => (
          <Film key={cinema.filmId} {...cinema}></Film>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
