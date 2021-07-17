import axios from 'axios'
import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

export class index extends Component {
  constructor(){
    super()
    this.state ={
      product: {
        body: '',
        title: '',
        id: null
      }
    }
  }
  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.idproduct}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        product: res.data
      })
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>hamaan Detail dengan product id {this.props.match.params.idproduct}</h1>
        <p>{this.state.product.body}</p>
      </div>
    )
  }
}

export default index
