import React, { Component } from 'react'
import HeadBar from '../../components/common/HeadBar'
import request from '../../util/request'
import API from '../../util/API'
import { getQueryKeys } from '../../util/func'
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile'
import Rating from '../../components/common/Rating'


export default class Movie extends Component {
  constructor() {
    super()
    this.state = null
    this.getPros = this.getPros.bind(this)
    this.fetchMovie = this.fetchMovie.bind(this)
  }

  componentDidMount() {
    let id = getQueryKeys(this.props.location.search, 'id')
    this.fetchMovie(id)
  }

  async fetchMovie(id) {
    try {
      let result = await request.asyncGet(`${API.get_movie}/${id}`)
      let resultData = await result.json();
      this.setState(resultData)
      this.getPros()
    } catch (err) {
      console.warn(err)
    }
  }

  getPros() {
    this.setState({
      pros: `
      ${this.state.year}<br/>
      ${this.state.genres.join(' / ')}<br/>
      原名: ${this.state.original_title}<br/>
      `
    })
  }

  render() {
    if (this.state !== null) {
      return (
        <div className="page page-movie sticky">
          <HeadBar back={true} title={this.state.title} />
          <div className="poster">
            <div className="img-wrap"><img src={this.state.images.medium} alt={this.state.title} /></div>
            <img className="background" src={this.state.images.large}  />
          </div>
          <div className="page-row details">
            <section className="details-props">
              <div className="left">
                <h1>{this.state.title}</h1>
                <div className="pros" dangerouslySetInnerHTML={{ __html: this.state.pros }}>
                </div>
              </div>
              <div className="right">
                <div className="title">豆瓣评分</div>
                <div className="average">{this.state.rating.average}</div>
                <Rating readonly={true} rating={this.state.rating.stars / 10} avertage={this.state.rating.average}/>
                <div className="audienceCount">{this.state.ratings_count}人</div>
              </div>
            </section>
            <section className="introduces">
              <h5>简介</h5>
              <p>{this.state.summary}</p>
            </section>
            <section className="filmmakers">
              <h5>影人</h5>
              <ul>
                {
                  this.state.directors.map((el) => (
                    <li key={el.id}>
                      <figure>
                        <Link to={`/filmmaker?id=${el.id}`}>
                          <img src={el.avatars.small} alt={el.alt} referrerPolicy="never" />
                          <figcaption>{el.name}</figcaption>
                          <small>导演</small>
                        </Link>
                      </figure>
                    </li>
                  ))
                }
                {
                  this.state.casts.map((el) => (
                    <li key={el.id}>
                      <figure>
                        <Link to={`/filmmaker?id=${el.id}`}>
                        <img src={el.avatars.small} alt={el.alt} referrerPolicy="never" />
                        <figcaption>{el.name}</figcaption>
                        </Link>
                      </figure>
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </div>
      )
    } else {
      return (
        <div className="page page-movie empty">
          <div className="page-loading"><Icon type="loading" size="lg" /></div>
        </div>
      )
    }
  }
}
