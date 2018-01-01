import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Icon } from 'antd-mobile';

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="header-wrap">
        <header>
          <div className="logo"><span>豆瓣电影</span></div>
          <div className="searchbar">
            <Link to="/search"><Icon type="search" size="xs" />&nbsp;<span>电影 / 电视剧 / 影人</span></Link>
          </div>
        </header>
      </div>
    )
  }
}
