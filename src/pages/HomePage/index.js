import axios from 'axios'
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

const HomePage = () => {
  const location = useLocation()
  useEffect(() => {
    const {search} = qs.parse(location.search)
    // console.log(data);
    axios.get(`http://localhost:4000/product?seach=${search}`)

  }, [])
  return (
    <div>
      <h1>halaman home</h1>
    </div>
  )
}

export default HomePage
