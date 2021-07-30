import axios from 'axios'
import React, {useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'
import {useSelector, useDispatch} from 'react-redux'
import Print from '../../components/base/Print'
import {increment, decrement} from '../../configs/redux/actions/userAction'
import { getProduct, setProduct } from '../../configs/redux/actions/productAction'

const HomePage = () => {
  // const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    // const {search} = qs.parse(location.search)
    // console.log(data);
    // axios.get(`http://localhost:4000/product`)
  dispatch(getProduct())
  }, [])

  const {email, count, products, loading} = useSelector((state)=>state.product)
  // const stateGlo = useSelector((state) => state)
  // const count = useSelector((state) => state.count)
  return (
    <div>
      <h2>data dari state global dengan name {email}</h2>
      <Print/>
      <h4>nilai count : {count}</h4>
      {/* <p>{JSON.stringify(stateGlo)}</p> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> history.push('/login')}>pindah ke login</button>
      {loading && <h1>Loadingg... bro....</h1>}
      <ul>
        {products.map((item)=>
        <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}

export default HomePage
