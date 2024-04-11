import { Component } from 'react'
import IndexRouter from './router/indexRouter'
import Tabbar from './components/Tabbar/Tabbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <IndexRouter>
          {/* 导航栏 */}
          <Tabbar></Tabbar>
        </IndexRouter>
      </div>
    )
  }
}
