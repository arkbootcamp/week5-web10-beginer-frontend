import React, {Component, Fragment} from 'react'
import Input from './components/base/Input'
import Button from './components/base/Button'
import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'
import Login from './pages/Login'
import './custum.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    console.log('ini method costructor');
    this.state={
      name: 'risano',
      umur: 17,
      password: 'hello'
    }
  }
  // state = {
  //   name: 'risano'
  // }
  componentDidMount(){
    console.log('ini method compoenntDIdMount');
  }
  componentDidUpdate(){
    console.log('ini method componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('ini method componentWillUnmount');
  }

  ubahNama(){
   this.setState({
     name: 'akbar'
    //  umur: 20
   })
  }
  handleChangeName(e){

    console.log(e);
    const nameKey = 'age'
    // const object = {
    //   [nameKey]: 12
    // }
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick(price){
    alert(price)
  }

  render(){
    console.log('ini method render');
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/about/1" component={Detail} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
      // <>
      //   <h1 className="title">hello world menggunakan class {this.state.name} dan {this.state.umur}</h1>
      //   <button onClick={()=>this.ubahNama()}>ubah nama</button>

      //   <input type="text" name="name" onChange={(event)=>this.handleChangeName(event)} />
      //   <Input
      //     label="username"
      //     placeHolder="silakan isikan username"
      //     name="name"
      //     type="text"
      //     value={this.state.name}
      //     onMyChange={(e) => this.handleChangeName(e)}
      //   />
      //   <Input
      //   label="password"
      //   placeHolder="*******"
      //   name="password"
      //   type="password"
      //   value={this.state.password}
      //   // onMyChange={(e)=>this.setState({})} 

      //   />

      //   <Button title="kirim bro" onMyClick={(e)=>this.handleClick(e)}/>
      // </>
    )
  }

}
export default App