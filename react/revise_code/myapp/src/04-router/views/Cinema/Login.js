import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const [value, setValue] = useState('')
  const history = useHistory()
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          localStorage.setItem('token', value)
          history.push('/center')
        }}
      >
        登录
      </button>
    </div>
  )
}

export default Login
