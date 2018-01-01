import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Movie from '../common/Movie'

export default class TopInAll extends Component {
  componentDidMount(){
    this.props.TopInAll === null && this.props.fetchRank.getTopInAll();
  }
  render() {
    if (this.props.TopInAll !== null) {
      let subjects = this.props.TopInAll.subjects.slice(0, 18)
      let ulList = []
      for (let i = 0, len = subjects.length, _ul = []; i < len; i++) {
        _ul.push(subjects[i])
        if ((i + 1) % 6 === 0 || i + 1 === len) {
          ulList.push(_ul)
          _ul = new Array()
        }
      }
      return (
        <div className="page-row topinall">
          <h5>TOP250</h5>
          <Carousel
            autoplay={false}
            selectedIndex={1}
          >
            {
              ulList.map((el, index) => {
                return <ul className="inner-sliders cols-3" key={index}>
                  {
                    el.map((_el, _index) => (
                      <li key={_index}><Movie {..._el} /></li>
                    ))
                  }
                </ul>
              })
            }
          </Carousel>
        </div>
      )
    } else {
      return (<div className="page-row"></div>)
    }
  }
}

