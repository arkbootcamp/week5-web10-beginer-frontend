import React, { useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import qs from 'query-string'
const About = (props) => {
  const [product, setProduct] = useState([])
  const [number, setNumber] = useState(1)
  const {search} = useLocation()
  const [input, setInput]=useState('')

  useEffect(()=>{
    console.log('useEffect dijlaan kan');
    // const location = props.location.search
    const data = qs.parse(search)
    console.log(data);
    // console.log(location);
    axios.get('https://jsonplaceholder.typicode.com/albums/')
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {

      })
  }, [number])
  // console.log(props);
  const handleSearch =()=>{
    props.history.push(`/home?search=${input}`)
  }
  return (
    <div>
      <h1>{number}</h1>
      <ul>
        {product.map((item)=>
        <li>{item.title}</li>
        )}
      </ul>
      <button onClick={()=>setNumber(number + 1)}>tambah</button>
      <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default About
