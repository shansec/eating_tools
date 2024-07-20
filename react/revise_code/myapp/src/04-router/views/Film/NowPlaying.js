import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/test.json').then(res => {
      setList(res.data.data.films)
    })
  }, [])
  const history = useHistory()

  const handleClick = id => {
    // 声明式导航
    // window.location.href = `#/detail/${id}`
    // 动态路由传参
    // history.push(`/detail/${id}`)
    // state 传参
    // history.push({ pathname: '/detail', state: { day: id } })
    // query 传参
    history.push({ pathname: '/detail', query: { id: id } })
  }

  return (
    <div>
      <ul style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {list.map(item => (
          <li
            style={{
              display: 'inline-block',
              width: '100%',
              height: '50px',
              borderBottom: '1px solid #eee'
            }}
            key={item.filmId}
            onClick={() => handleClick(item.filmId)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
