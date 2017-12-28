import React, { Component } from 'react'
import HeadBar from '../common/HeadBar'
import request from '../../util/request'
import API from '../../util/API'
import { getQueryKeys } from '../../util/func'

export default class Movie extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      pros: '',
      images: {
        small:'',
        medium:'',
        large:''
      },
      rating: {
        stars: 0,
      },
      ratings_count: '',
      summary: '',
      directors: [{
        name: '',
        id: '0',
        avatars: { small: '' },
        alt: ''
      }],
      casts: [{
        name: '',
        id: 0,
        avatars: { small: '' },
        alt: ''
      }]
    }
    this.getRank =this.getRank.bind(this)
    this.getPros =this.getPros.bind(this)
    this.fetchMovie =this.fetchMovie.bind(this)
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
    } catch(err) {
      console.warn(err)
    }
  }

  getPros() {
    console.log(this.state)
    this.setState({pros: `
      ${this.state.year}<br/>
      ${this.state.genres.join(' / ')}<br/>
      原名: ${this.state.original_title}<br/>
      `
    })
  }

  getRank(){
  }

  render() {
    let rank = ''
    if (this.getRank()) {
      rank = <div className="rank">123</div>
    }
    return (
      <div>
        <HeadBar back={true} title={this.state.title} />
        <div className="poster">
          <div className="img-wrap"><img src={this.state.images.medium} alt={this.state.title} /></div>
        </div>
        <div className="details">
          <div className="details-props">
            <div className="left">
              <h1>{this.state.title}</h1>
              {rank}
              <div className="pros" dangerouslySetInnerHTML={{ __html: this.state.pros }}>
              </div>
            </div>
            <div className="right">
              <div>{this.state.rating.stars}</div>
              <div className="audienceCount">{this.state.ratings_count}人</div>
            </div>
          </div>
          <div className="introduces">
            <h5>简介</h5>
            <p>{this.state.summary}</p>
          </div>
          <div className="filmmakers">
            <h5>影人</h5>
            <ul>
              {
                this.state.directors.map((el) => (
                  <li key={el.id}>
                    <figure>
                      <img src={el.avatars.small} alt={el.alt} referrerPolicy="never"/>
                      <figcaption>{el.name}</figcaption>
                      <small>导演</small>
                    </figure>
                  </li>
                ))
              }
              {
                this.state.casts.map((el) => (
                  <li key={el.id}>
                    <figure>
                      <img src={el.avatars.small} alt={el.alt} referrerPolicy="never"/>
                      <figcaption>{el.name}</figcaption>
                    </figure>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
