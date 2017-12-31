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
        <section>
          <h5>北美票房榜</h5>
          <ul>
            {
              subjects.map((el, index) => (
                <li key={index}>
                  ({index + 1}) <Movie {...el.subject} />
                </li>
              ))
            }
          </ul>
        </section>
      )
    } else {
      return (<div></div>)
    }
  }
}
