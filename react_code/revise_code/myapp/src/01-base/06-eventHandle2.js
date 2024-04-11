import React from 'react';

export default class App extends React.Component {
  a = 100
  render() {
    return (
        <div>
          <input type="text"/>
          <br/>
          <button onClick={ () => console.log('add1', this.a) }>add1</button>
          {
            // 这种函数调函方式 this 指向会出现问题，需要修正 this
          }
          <button onClick={ this.print.bind(this) }>add2</button>
          <button onClick={ () => { this.print1() }}>add3</button>
        </div>
    )
  }

  print() {
    console.log('add2', this.a)
  }

  print1 = () => {
    console.log('print1', this.a)
  }
}
