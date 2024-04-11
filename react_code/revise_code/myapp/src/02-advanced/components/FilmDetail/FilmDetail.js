import React, {Component} from 'react';

class FilmDetail extends Component {
  render() {
    let { synopsis } = this.props
    return (
        <div style={{background: 'yellow', width: '300px', height: '300px'}}>
          电影简介：{synopsis}
        </div>
    );
  }
}

export default FilmDetail;
