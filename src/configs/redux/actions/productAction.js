import axios from "axios"
import * as string from '../string'


export const getProduct = ()=>async(dispatch)=>{
  // return new Promise((resolve, reject)=>{
    dispatch({ type: 'REQ_GET_PRODUCT' })
    const user = await axios.get('http://localhost:4000/v1/products')
      .then((res) => {
        const result = res.data.data
        dispatch({ type: string.GET_PRODUCTS, payload: result })
      })
}