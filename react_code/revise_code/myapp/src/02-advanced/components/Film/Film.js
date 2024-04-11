import React, {Component} from 'react';
import './Film.css'
class Film extends Component {
  render() {
    let {name, poster, grade, nation, runtime, synopsis} = this.props
    return (
        <div className="film-box" onClick={() => {
          this.props.handleClick(synopsis)
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

export default Film;
