import React, { useState } from 'react'
import style from './login.module.css'
// import Button from '../../components/module/Button'
import icon from '../../assets/module/Frame.png'
import { useSelector } from 'react-redux'
import {login} from '../../configs/redux/actions/userAction'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import Card from '../../components/base/Card'
import {Button, Card} from '../../components/base'
import {frame} from '../../utils/icon'

const Login = (props) => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const [form, setForm] =useState({
    username: '',
    password: ''
  })
  const handleChange =(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  } 
  const handleLogin =async()=>{
    dispatch(login(form, history))
    
    // alert(`username ${form.username} dan password ${form.password}`)
    // try{
    //   history.push('/home')
    //   // alert ('benar')
    // }catch(error){
    //   alert('password anda salah')
    // }
    // if(result.err){
    //   alert('password salah')
    // }else{
    //   history.push('/home')
    // }
    // .then((res)=>{
    //   history.push('/home')
    // })
    // .catch((err)=>{
    //   alert('password anda salah')
    // })
  }
  const {count} = useSelector(state => state)
  return (
    <div className={style.wrapper}>
      <img src={frame} alt="" />
      <Card title="baju baru" description={Button}/>
      <h2>nilai count adalah {count}</h2>
      <h1 className={style.title}>halaman login</h1>
      <p>username: {form.username}</p>
      <img src={icon} alt="" />
      <div className={style['form-control']}>
        <label htmlFor="username">Username</label>
        <input value={form.username} type="text" name="username" id="username" className={style['form-input']} onChange={handleChange} />
      </div>
      <div className={style['form-control']}>
        <label htmlFor="password">Password</label>
        <input value={form.password} type="password" name="password" id="password" className={style['form-input']} onChange={handleChange} />
      </div>
      <Button title="Register" fileEvent={handleLogin}/>
    </div>
  )
}

export default Login
