import React, {Component} from 'react'

class Input extends Component{

render(){
  return(
    <div>
      <label className="title">{this.props.label}</label>
      <input className="btn" type={this.props.type} name={this.props.name} placeholder={this.props.placeHolder} value={this.props.value} onChange={(e) => this.props.onMyChange(e)}/>
    </div>
  )
}
}
export default Input