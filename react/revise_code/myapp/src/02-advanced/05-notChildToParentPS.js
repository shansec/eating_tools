import React, {Component} from 'react';
import axios from 'axios';
import './components/Film/Film.css'



// 调度中心
const bus = {
  list: [],

  subscribe(callback) {
    this.list.push(callback)
  },

  public(text) {
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}

class Film extends Component {
  render() {
    let {name, poster, grade, nation, runtime, synopsis} = this.props
    return (
        <div className="film-box" onClick={() => {
          bus.public(synopsis)
        }}>
          <img className="img-item" src={poster}/>
          <div className="div-item">
            <span>{name}</span>
            <span>观众评分：{grade}分</span>
            <span>{nation}|{runtime}分钟</span>
          </div>
        </div>
    );
  }
}

class FilmDetail extends Component {
  constructor() {
    super();
    this.state = {
      info: ''
    }
    bus.subscribe((info) => {
      this.setState({
        info: info
      })
    })
  }
  render() {
    return (
        <div style={{background: 'yellow', width: '300px', height: '300px'}}>
          电影简介：{this.state.info}
        </div>
    );
  }
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
    };
    axios.get('/test.json').then(res => {
      console.log(res)
      this.setState({
        cinemaList: res.data.data.films
      })
    })
  }

  render() {
    return (
        <div>
          {
            this.state.cinemaList.map(cinema =>
                <Film key={cinema.filmId} {...cinema}></Film>
            )
          }
          <FilmDetail></FilmDetail>
        </div>
    )
  }
}
