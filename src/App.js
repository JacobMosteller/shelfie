import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      urlInput:'',
      nameInput:'',
      priceInput:'',
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then((res)=>{
      this.setState({
        inventory: (res.data)
      })
    })
  }

  addToInventory = () => {

    let item = {
      url: this.state.urlInput,
      name: this.state.nameInput,
      price: this.state.priceInput
    };

    axios.post('/api/product', {item})
      .then((res)=>{

      })
  }

  urlUpdate = (event) => {
    this.setState({
      urlInput: (event.target.value)
    })
  };

  nameUpdate = (event) => {
    this.setState({
      nameInput: (event.target.value)
    })
  };

  priceUpdate = (event) => {
    this.setState({
      priceInput: (event.target.value)
    })
  };

  cancel = (event) => {
    this.setState({
      urlInput:'',
      nameInput:'',
      priceInput:''
    })
  }

  render() {
  return (
    <div className="App">
      <Dashboard inventory = {this.state.inventory}/>
      <Form URL = {this.state.urlInput} NAME={this.state.nameInput} PRICE = {this.state.priceInput} updateUrl = {this.urlUpdate} updateName = {this.nameUpdate} updatePrice = {this.priceUpdate} cancel = {this.cancel} add = {this.addToInventory}/>
      <Header/>
  
    </div>
  );
  }
}

export default App;
