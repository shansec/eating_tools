import { Component } from "react";
import axios from "axios";
import "./css/lifeCycleRunning3Case.css";

class FilmList extends Component {
  state = {
    filmList: [],
    type: 0,
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      type: nextProps.type,
    };
  }

  componentDidMount() {
    if (this.state.type === 1) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=1&k=7999050",
        method: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16940691196886675116457985"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          filmList: res.data.data.films,
        });
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=2&k=6362308",
        method: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16940691196886675116457985"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          filmList: res.data.data.films,
        });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type === prevState.type) return;
    if (this.state.type === 1) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=1&k=7999050",
        method: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16940691196886675116457985"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          filmList: res.data.data.films,
        });
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=2&k=6362308",
        method: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16940691196886675116457985"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          filmList: res.data.data.films,
        });
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.filmList.map((film, index) => (
          <div key={index}>{film.name}</div>
        ))}
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    type: 1,
  };

  render() {
    return (
      <div>
        <ul>
          <li
            style={{
              borderBottom: this.state.type === 1 ? "2px solid red" : "",
            }}
            onClick={() => {
              this.setState({
                type: Number(1),
              });
            }}
          >
            正在热映
          </li>
          <li
            style={{
              borderBottom: this.state.type === 2 ? "2px solid red" : "",
            }}
            onClick={() => {
              this.setState({
                type: Number(2),
              });
            }}
          >
            即将上映
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    );
  }
}
