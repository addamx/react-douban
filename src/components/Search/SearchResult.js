import React from 'react'
import {Link} from 'react-router-dom'
import { Pagination } from 'antd-mobile'
import Movie from '../common/Movie'
import { Icon } from 'antd-mobile'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.Loading) {
      return (
        <div>
          <div className="genres-container">
            <h5>分类查找</h5>
            <ul>
              {
                this.props.messResult.genreList.map((el, index) => (
                  <li key={index}><Link to={`/search-movie?tag=${el}`}>{el}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className="filmmakers-container">
            <h5>影人</h5>
            <ul>
              {
                this.props.messResult.filmmakerList.map((el, index) => (
                  <li key={index}><Link to={`/filmmaker?id=${el.id}`}><img src={el.avatars && el.avatars.small} referrerPolicy="never"/>{el.name}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className="movies-container">
            <h5>影视</h5>
            <ul>
              {
                this.props.messResult.movieList.slice(0,10).map((el, index) => (
                  <li key={el.id}>
                    <Movie {...el} />
                  </li>
                ))
              }
            </ul>
            <div className="search-more-movie"><Link to={`/search-movie?q=${this.props.query}`}>查看更多影视</Link></div>
          </div>
        </div>
      )
    } else {
      return (
        <Icon type="loading" size="lg" />
      )
    }
  }
}
