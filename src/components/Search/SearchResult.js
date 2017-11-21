import React from 'react'
import {Link} from 'react-router-dom'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const total = this.props.SearchResult.total
    const subjects = this.props.SearchResult.subjects

    return (
      <div>
        <div>total: {total} </div>
        <ul>
          {
            subjects.map((el,index) => {
              return (
                <li key={index}>
                  <Link to="/movie">{el.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}