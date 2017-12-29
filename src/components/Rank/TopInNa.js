import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Movie from '../common/Movie'

export default class TopInNa extends Component {
  componentDidMount(){
    this.props.fetchRank.getTopInNa();
  }
  render() {
    //console.log(this.props)
    let subjects = this.props.TopInNa.subjects
    let ulList = []
    // for (let i = 0, len = subjects.length, _ul = []; i < len; i++) {
    //   _ul.push(subjects[i])
    //   if ((i + 1) % 6 === 0 || i + 1 === len) {
    //     ulList.push(_ul)
    //   }
    // }
    const renderList = (list) => (
      React.createElement('ul', null, [...list])
    )
    return (
      <section>
        <h5>北美票房榜</h5>
        <Carousel
          autoplay={false}
          selectedIndex={1}
        >
          {
            subjects.map((el) => (
                <Movie {...el.subject} />
            ))
          }
        </Carousel>
      </section>
    )
  }
}