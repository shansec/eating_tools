import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [{
        id: 1,
        text: '1111'
      }, {
        id: 2,
        text: '2222'
      }, {
        id: 3,
        text: '3333'
      }]
    }
    this.myRef = React.createRef()
  }

  render() {
    return (
        <div>
          <input ref={this.myRef}/>
          <button onClick={this.handleClick}>add</button>
          <ul>
            {
              this.state.list.map((item, index) =>
                  <li key={item.id}>
                    {item.text}
                    {/* 富文本展示 */}
                    <span dangerouslySetInnerHTML={
                      {
                        // __html:
                      }
                    }></span>
                    <button onClick={ () => this.handleDelClick(index) }>del</button>
                  </li>)
            }
          </ul>
          { this.state.list.length ===0 && <div>暂无代办事项</div> }
        </div>
    )
  }

  handleClick = () => {
    let value = this.myRef.current.value,
        index = this.state.list.length + 1,
        data = {id: index, text: value};
    // 不要直接修改状态
    let list = [...this.state.list]
    list.push(data)

    this.setState({
      list: list
    }, () => {
      this.myRef.current.value = ''
    })
  }

  handleDelClick = (index) => {
    console.log('删除', index)
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
