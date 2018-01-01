import React, { Component } from 'react'
import {Icon} from 'antd-mobile'

export default class HeadBar extends Component {
  constructor(){
    super()
  }

  render() {
    let back = ''
    if (typeof this.props.back) {
      back = <a className="goback" href='#' onClick={()=>history.go(-1)}><Icon type="left" size="lg" color="#ffffff"/></a>
    }
    return (
      <div className="header-wrap">
        <header>
            {back}
            <h1>{this.props.title}</h1>
        </header>
      </div>
    )
  }
}
