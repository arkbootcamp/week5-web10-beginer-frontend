import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/module/Navbar';
export class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar/>
        <h1>halaman home</h1>
        <button onClick={()=> this.props.history.push('/about')}>pindah halaman about</button>
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/detail">detail</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
