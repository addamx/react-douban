import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Movie from '../common/Movie'
import { Icon } from 'antd-mobile'

export default class TopInAll extends Component {
  componentDidMount(){
    this.props.TopInAll.subjects.length || this.props.fetchRank.getTopInAll();
  }
  render() {
    if (this.props.TopInAll !== null) {
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
    } else {
      return (
        <Icon type="loading" size="lg" />
      )
    }
  }
}

