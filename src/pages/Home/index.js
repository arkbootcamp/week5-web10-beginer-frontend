import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/module/Navbar';
import axios from 'axios'

export class Home extends Component {
  constructor(){
    super()
    this.state={
      products: [],
      loading: false
    }
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
  
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        this.setState({
          products: res.data,
          loading: false
        })
      })
      .catch((err) => {

      })
      console.log('hello');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar/>
        <h1>halaman home</h1>
        {this.state.loading ?
        <h1>loading...........</h1>:
          <ul>
            {this.state.products.map((item, index) =>
              <li key={index}>{item.title}</li>
            )}
          </ul>
      }
        
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
