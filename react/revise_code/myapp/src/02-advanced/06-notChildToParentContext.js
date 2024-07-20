import React, {Component} from 'react';
import axios from 'axios';
import './components/Film/Film.css'


const GlobalContext = React.createContext()

class Film extends Component {
  render() {
    let {name, poster, grade, nation, runtime, synopsis} = this.props
    return (
        <GlobalContext.Consumer>
          {
            (value) => {
              console.log(value)
              return <div className="film-box" onClick={() => {
              }}>
                <img className="img-item" src={poster}/>
                <div className="div-item">
                  <span>{name}</span>
                  <span>观众评分：{grade}分</span>
                  <span>{nation}|{runtime}分钟</span>
                </div>
              </div>
            }
          }
        </GlobalContext.Consumer>
    );
  }
}

class FilmDetail extends Component {

  render() {
    return (
        <GlobalContext.Consumer>
          {
            (value) => {
              return <div style={{background: 'yellow', width: '300px', height: '300px'}}>
                电影简介：{value}
              </div>
            }
          }
        </GlobalContext.Consumer>
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
        <GlobalContext.Provider value={{
          call: '打电话',
          sms: '短信'
        }}>
          <div>
            {
              this.state.cinemaList.map(cinema =>
                  <Film key={cinema.filmId} {...cinema}></Film>
              )
            }
            <FilmDetail></FilmDetail>
          </div>
        </GlobalContext.Provider>
    )
  }
}
