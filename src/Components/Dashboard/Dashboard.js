import React, { Component } from 'react'
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    let products = (this.props.inventory)
    let inventory = products.map((e,i)=>{
      return <Product  name = {products[i].itemname} price = {products[i].price} url = {products[i].url}/>
      
    })
    return (
      <div>
        Dashboard
        {inventory}
      </div>
    )
  }
}
