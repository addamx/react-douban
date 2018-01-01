import React from 'react'
import Movie from '../common/Movie'
import { Icon } from 'antd-mobile'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.ComingSoon !== null || this.props.movieActions.fetchComingSoon()
  }

  render() {
    if (this.props.ComingSoon !== null) {
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
    } else {
      return (
        <div className="page-loading"><Icon type="loading" size="lg" /></div>
      )
    }

  }
}
