import React, { Component } from 'react';
import HomeHead from './HomeHead';
import HomeNav from './HomeNav';
import Footer from '../common/Footer';
import './home.scss';

export default class extends Component {

  render() {
    return (
      <div className="home-page page">
        <HomeHead {...this.props} />
        <HomeNav {...this.props} />
        <Footer {...this.props} pageId={'homeTab'} />
      </div>
    )
  }
}
