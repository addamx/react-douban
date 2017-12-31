import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import Movie from '../common/Movie'
import { Icon } from 'antd-mobile'

export default class TopInNa extends Component {
  componentDidMount(){
    this.props.TopInNa.subjects.length || this.props.fetchRank.getTopInNa();
  }
  render() {
    if (this.props.TopInNa !== null) {
      let subjects = this.props.TopInNa.subjects
      let ulList = []
      for (let i = 0, len = subjects.length, _ul = []; i < len; i++) {
        _ul.push(subjects[i])
        if ((i + 1) % 3 === 0 || i + 1 === len) {
          ulList.push(_ul)
          _ul = new Array()
        }
      }
      return (
        <section>
          <h5>北美票房榜</h5>
          <Carousel
            autoplay={false}
            selectedIndex={1}
            infinite={true}
          >
            {
              ulList.map((el, index) => {
                return <ul key={index}>
                  {
                    el.map((_el, _index) => (
                      <li key={_index}><Movie {..._el.subject} /></li>
                    ))
                  }
                </ul>
              })
            }
          </Carousel>
        </section>
      )
    } else {
      return (<Icon type="loading" size="lg" />)
    }
  }
}
