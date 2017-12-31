import React, { Component } from 'react'

export default class HeadBar extends Component {
  constructor(){
    super()
  }

  render() {
    let back = ''
    if (typeof this.props.back) {
      back = <a href='#' onClick={()=>history.go(-1)}>&lt;back</a>
    }
    return (
      <header>
        <div>
          {back}
          <h2>{this.props.title}</h2>
        </div>
      </header>
    )
  }
}
