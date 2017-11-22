import React from 'react'
import Movie from '../Common/Movie'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.movieActions.fetchComingSoon()
  }

  render() {
    const subjects = this.props.ComingSoon.subjects;
    return (
      <ul>
        {
          subjects.map((el, index) => (
            <li key={index} ><Movie {...el} /></li>
          ))
        }
      </ul>
    )
  }
}
