import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { SearchBar } from 'antd-mobile';

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="cityName">
          <Link to="/city"><i>city</i></Link>
        </div>
        <div className="searchMovie">
          <Link to="/search"><div>Search Movie</div></Link>
        </div>
      </div>
    )
  }
}