import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    this.props.movieActions.fetchInTheaters();
  }

  render() {
    return (
      <div className="container home-page">

      </div>
    )
  }
}
