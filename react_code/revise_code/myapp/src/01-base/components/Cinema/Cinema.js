import React, { Component } from "react";
import axios from "axios";

import "./Cinema.css";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
    };
    // axios 请求数据
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3093284",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a": "3000","ch": "1002","v": "5.2.1","e": "16940691196886675116457985"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        this.setState({
          cinemaList: res.data.data.cinemas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  inputRef = React.createRef();

  render() {
    return (
      <div className="cinema-container">
        <div className="search">
          <input type="text" ref={this.inputRef} onKeyDown={this.handelInput} />
        </div>
        <div className="cinema-box">
          {this.state.cinemaList.map((item) => (
            <div key={item.cinemaId} className="cinema-item">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
  handelInput = (e) => {
    if (e.keyCode === 13) {
      let value = this.inputRef.current.value;
      let newCinemaList = this.state.cinemaList.filter((item) =>
        item.name.includes(value)
      );

      this.setState({
        cinemaList: newCinemaList,
      });
    }
  };
}
