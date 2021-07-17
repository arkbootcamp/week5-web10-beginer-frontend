import React, { useState } from 'react'
import style from './login.module.css'
import Button from '../../components/module/Button'
import icon from '../../assets/module/Frame.png'

const Login = (props) => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

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
  const handleLogin =()=>{
    alert(`username ${form.username} dan password ${form.password}`)
  }
  return (
    <div className={style.wrapper}>
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
