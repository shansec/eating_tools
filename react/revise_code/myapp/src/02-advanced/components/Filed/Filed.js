import React, {Component} from 'react';

class Filed extends Component {
  render() {
    return (
        <div style={{background: 'yellow', marginTop: '10px'}}>
          <label>{this.props.label}</label>
          <input type={this.props.type} onChange={(event) => {
            this.props.changeEvent(event.target.value)
          }} />
        </div>
    );
  }
}

export default Filed;
