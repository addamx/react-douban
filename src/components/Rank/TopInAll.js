import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';

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
                <Link to={`/movie?id=${el.id}`}>
                  ({index + 1}): {el.title}
                </Link>
              </div>
            ))
          }
        </Carousel>
      </section>
    )
  }
}

