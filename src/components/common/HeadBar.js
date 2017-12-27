import React, { Component } from 'react'

export default class HeadBar extends Component {
  constructor(){
    super()
    this.toShare = this.toShare.bind(this)
  }

  toShare(){

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
          <a className="icon-share" href='#' onClick={this.toShare}>share</a>
        </div>
      </header>
    )
  }
}
