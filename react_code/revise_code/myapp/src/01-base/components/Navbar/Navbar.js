import React, {Component} from 'react';
import types from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    title: types.string,
    showLeft: types.bool,
    showRight: types.bool
  }

  static defaultProps = {
    title: '暂未传值',
    showLeft: false,
    showRight: false
  }

  render() {
    const {title, showLeft, showRight} = this.props
    return (
        <div>
          {showLeft && <button>左返回</button>}
          navbar-{title}
          {showRight && <button>右返回</button>}
        </div>
    )
  }
}
