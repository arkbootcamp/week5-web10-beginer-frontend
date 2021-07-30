import axios from "axios"

export const increment = () => (dispatch, getState) => {
  // axios.get('')
  const { product } = getState()
  const newCount = product.count + 1
  setTimeout(() => {
    dispatch({ type: 'INCREMENT', payload: newCount })
  }, 2000)
}

export const decrement = () => {
  return { type: 'DECREMENT', coba: 'risanocoba@gamil.com', payload: ['sepeda', 'motor'] }
}

export const login = (data, history) => async (dispatch) => {
  // return new Promise ((resolve, reject)=>{
  try {
    const dataBody = { email: data.username, password: data.password }
    const result = await axios.post('http://localhost:4000/v1/users/login', dataBody)
    const dataResult = result.data.data
    dispatch({ type: 'LOGIN_USER', payload: dataResult })
    // console.log(dataResult);
    localStorage.setItem('token', dataResult.token)
    // const token = localStorage.getItem('token')
    // console.log(token);
    history.push('/home')
  } catch (error) {
    console.log(error.response);
    dispatch({ type: 'LOGIN_USER_ERROR', payload: error.response.data.error.message})
    alert(error.response.data.error.message)
  }
  // .then((res) => {
  //   const result = res.data.data
  //   dispatch({ type: 'LOGIN_USER', payload: result })
  //   return result
  //   // resolve(result)
  // })
  // .catch((err)=>{
  //   // reject(err)
  // })
  // })

}