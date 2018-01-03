import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Movie from '../common/Movie'

export default class TopInNa extends Component {
  componentDidMount(){
    this.props.TopInNa === null && this.props.fetchRank.getTopInNa();
  }
  render() {
    if (this.props.TopInNa !== null) {
      let subjects = this.props.TopInNa.subjects
      return (
        <div className="page-row topinna">
          <h5>北美票房榜</h5>
          <ul className="movie-list">
            {
              subjects.map((el, index) => (
                <li key={index}>
                  <div className="rank-num">{index + 1}&nbsp;</div><Movie {...el.subject} />
                </li>
              ))
            }
          </ul>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}
