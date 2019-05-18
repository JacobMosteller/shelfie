import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='url' value = {this.props.URL} onChange={this.props.updateUrl} />
        <input type="text" placeholder='name' value = {this.props.NAME} onChange={this.props.updateName}/>
        <input type="text" placeholder='price' value = {this.props.PRICE} onChange={this.props.updatePrice}/>
        <button onClick={this.props.add}>Add To Inventory</button>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    )
  }
}
