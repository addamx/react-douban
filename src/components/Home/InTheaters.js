import React from 'react'
import Movie from '../common/Movie'
import { Icon } from 'antd-mobile'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.InTheaters !== null || this.props.movieActions.fetchInTheaters()
  }

  render() {
    if (this.props.InTheaters !== null ) {
      const subjects = this.props.InTheaters.subjects;
      return (
        <ul>
          {
            subjects.map((el, index) => (
              <li key={index} ><Movie {...el} /></li>
            ))
          }
        </ul>
      )
    } else {
      return (
        <Icon type="loading" size="lg" />
      )
    }

  }
}
