import axios from 'axios'
import { useEffect } from 'react'

const ComingSoon = () => {
  useEffect(() => {
    axios
      .get('/api/mmdb/movie/v3/list/hot.json?ct=%E9%83%91%E5%B7%9E&ci=73&channelId=4')
      .then(res => console.log(res))
  }, [])
  return <div>comingsoon</div>
}

export default ComingSoon
