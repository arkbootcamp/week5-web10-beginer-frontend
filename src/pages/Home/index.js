import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/module/Navbar';
import axios from 'axios'
import {connect} from 'react-redux'
import {increment} from '../../configs/redux/actions/userAction'

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
    const myData = {
      nama: 'risano',
      email: 'muhammadrisno@gamil.com',
      age: 17,
    }
    return (
      <div>
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
        <button onClick={() => this.props.handleIncremen()}>click</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  user: state.user
})
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncremen: () => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
