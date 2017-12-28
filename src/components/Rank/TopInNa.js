import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class TopInNa extends Component {
  componentDidMount(){
    this.props.fetchRank.getTopInNa();
  }
  render() {
    //console.log(this.props)
    let subjects = this.props.TopInNa.subjects
    return (
      <section>
        <h5>北美票房榜</h5>
        <ul>
          {
            subjects.map((el, index) => (
              <li key={index}>
                <Link to={`/movie?id=${el.subject.id}`}>
                  ({el.rank}): {el.subject.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}