import React, {Component} from 'react';
import axios from 'axios';

import Film from './components/Film/Film';
import FilmDetail from './components/FilmDetail/FilmDetail';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      value: ''
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
                <Film key={cinema.filmId} {...cinema} handleClick={(value) => {
                  this.setState({
                    value: value
                  })
                }}></Film>
            )
          }
          <FilmDetail synopsis={this.state.value}></FilmDetail>
        </div>
    )
  }
}
