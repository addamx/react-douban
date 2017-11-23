import React from 'react'
import {Link} from 'react-router-dom'


export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="genres-container">
          <h5>total: {this.props.messResult.genreList.length}</h5>
          <ul>
            {
              this.props.messResult.genreList.map((el, index) => (
                <li key={index}><a href="#" onClick={(e) => {e.preventDefault()}}>{el}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="filmmakers-container">
          <h5>total: {this.props.messResult.filmmakerList.length}</h5>
          <ul>
            {
              this.props.messResult.filmmakerList.map((el, index) => (
                <li key={index}><a href="#" onClick={(e) => {e.preventDefault()}}><img src={el.avatars.small}/>{el.name}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="movies-container">
          <h5>total: {this.props.messResult.movieList.length}</h5>
          <ul>
            {
              this.props.messResult.movieList.slice(0,10).map((el, index) => (
                <li key={index}><a href="#" onClick={(e) => { e.preventDefault()}}><img src={el.images.small}/>{el.title}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
