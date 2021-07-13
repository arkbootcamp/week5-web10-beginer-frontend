import React, { Component } from 'react'
import style from './button.module.css'

export class index extends Component {
  state ={
    price : 10000
  }
  render() {
    return (
      <div>
        <button className={style.btn} onClick={() => this.props.onMyClick(this.state.price)}>{this.props.title}</button>
      </div>
    )
  }
}

export default index
