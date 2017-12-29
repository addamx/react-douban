import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Movie from '../common/Movie'

export default class TopInAll extends Component {
  componentDidMount(){
    this.props.fetchRank.getTopInAll();
  }
  render() {
    //console.log(this.props)
    let subjects = this.props.TopInAll.subjects
    return (
      <section>
        <h5>TOP250</h5>
        <Carousel
          autoplay={false}
          selectedIndex={1}
        >
          {
            subjects.map((el, index) => (
              <div key={index}>
               ({index+1}) <Movie {...el} />
              </div>
            ))
          }
        </Carousel>
      </section>
    )
  }
}

