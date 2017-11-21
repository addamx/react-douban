import React, { Component } from 'react';
import HomeHead from './HomeHead';
import HomeNav from './HomeNav';

export default class extends Component {

  render() {
    return (
      <div className="container home-page">
        <HomeHead {...this.props} />
        <HomeNav {...this.props} />
        {/* <Footer {...this.props} /> */}
      </div>
    )
  }
}
