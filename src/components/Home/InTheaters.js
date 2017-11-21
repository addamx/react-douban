import React from 'react'
import Movie from '../Common/movie'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.movieActions.fetchInTheaters()
  }

  render() {
    const subjects = this.props.InTheaters.subjects;
    return (
      <ul>
        {
          subjects.map((el,index) => (
            <li key={index} ><Movie {...el} /></li>
          ))
        }
      </ul>
    )
  }
}