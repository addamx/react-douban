import React, { Component } from 'react'
import HeadBar from '../../components/common/HeadBar'
import Movie from '../../components/common/Movie'
import request from '../../util/request'
import API from '../../util/API'
import { getQueryKeys } from '../../util/func'
import { Icon } from 'antd-mobile'

export default class Filmmaker extends Component {
  constructor() {
    super()
    this.state = null
  }

  componentDidMount() {
    let id = getQueryKeys(this.props.location.search, 'id')
    this.fetchFilmmaker(id)
  }

  async fetchFilmmaker(id) {
    try {
      let result = await request.asyncGet(`${API.get_filmmaker}/${id}`)
      let resultDate = await result.json()
      this.setState(resultDate)
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    if (this.state !== null)  {
      return (
        <div>
          <HeadBar back={true} title={this.state.name} />
          <div className="poster">
            <div className="img-wrap"><img src={this.state.avatars.medium} alt={this.state.name} referrerPolicy="never" /></div>
          </div>
          <div className="details">
            <div className="details-props">
              <div className="left">
                <h1>{this.state.name}</h1>
                <div className="props" >
                  {this.state.aka_en.join(' / ')}<br/>
                  性别: {this.state.gender}<br />
                  出生地: {this.state.born_place}
                </div>
              </div>
            </div>

            <div className="works">
              <h5>代表作品</h5>
              <ul>
                {
                  this.state.works.map((el, index) => (
                    <li key={index}>
                      <Movie {...el.subject} />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Icon type="loading" size="lg" />
      )
    }
  }
}
