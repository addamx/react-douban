import React from 'react'
import Crating from 'react-rating'

export default class Rating extends React.Component {
  render() {
    if (Number(this.props.avertage) !== 0) {
      return (
        <div>
        <Crating
          initialRate={this.props.rating}
          empty={<svg width="20" height="20"><use xlinkHref="#star-empty"></use></svg>}
          full={<svg width="20" height="20"><use xlinkHref="#star"></use></svg>}
          readonly={this.props.readonly}
        />
          <span className="average">{this.props.avertage}</span>
        </div>
      )
    } else {
      return (
        <span>尚无评分</span>
      )
    }
  }
}
