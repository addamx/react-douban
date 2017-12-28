import React, { Component } from 'react'
import HeadBar from '../common/HeadBar'
import TopInAll from './TopInAll'
import TopInNa from './TopInNa'
import Footer from '../common/Footer'


export default class Rank extends Component {
  constructor(){
    super()
    this.state = {
      title: '排行榜'
    }
  }
  render() {
    console.log(this.constructor.name);
    return (
      <div className={'page'}>
        <HeadBar back={true} title={this.state.title} />
        <TopInAll {...this.props} />
        <TopInNa {...this.props} />
        <Footer {...this.props} pageId={'rankTab'}/>
      </div>
    )
  }
}