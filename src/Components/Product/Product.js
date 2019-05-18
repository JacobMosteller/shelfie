import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props){
    super(props)
  }

  render() {

    let name = (this.props.name)
    let price = (this.props.price)
    let picture = (this.props.url)
    
    return (
      <div>
      <img src={picture} alt=""/>
      <h2>{name}</h2>
      <h2>{price}</h2>
      </div>
    )
  }
}
