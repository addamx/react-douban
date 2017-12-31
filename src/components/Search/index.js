import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
import SearchResult from './SearchResult'
import { Pagination } from 'antd-mobile'
import SearchMovieAly from '../../util/SearchMovieAly'
import { debounce, getQueryKeys } from '../../util/func'
import * as Storage from '../../util/localStorage'
import { Link } from 'react-router-dom'



export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: getQueryKeys(this.props.location.search, 'query') || '',
      messResult: {
        genreList: [],
        filmmakerList: [],
        movieList: []
      },
      searchHistory: JSON.parse(Storage.getItem('searchHistory')) || []
    }
    this.onChange = this.onChange.bind(this)
    this.saveHistory = this.saveHistory.bind(this)
    this.fetchResult = debounce(500, this.fetchResult);
  }

  componentDidMount() {
    this.state.value && this.fetchResult(this.state.value)
  }

  //分析结果: 分类/影人/作品
  async fetchResult() {
    await this.props.searchActions.searchMovie(this.state.value)
    await this.setState({ messResult: new SearchMovieAly(this.props.SearchResult, this.state.value).getMessResult() })
    //this.props.history.push({ search: `query=${this.state.value}` })  //影响goBack
    this.saveHistory(this.state.value)
  }

  onChange(value) {
    this.setState({ value })
    this.fetchResult()
  }

  saveHistory(search) {
    let org = this.state.searchHistory
    if (!search || org.indexOf(search) !== -1) {
      return
    }
    if (org.length >= 10) {
      this.setState({ searchHistory: [...org.slice(1), search] })
    } else {
      this.setState({ searchHistory: [...org, search] })
    }

    Storage.setItem('searchHistory', JSON.stringify(this.state.searchHistory))
  }

  render() {
    let resultRender = ''
    if (this.state.value) {
      resultRender = <SearchResult {...this.props} messResult={this.state.messResult} query={this.state.value} />
    } else {
      resultRender = <div>
        <h5>搜索历史</h5>
        <ul>
          {
            this.state.searchHistory.map((el, index) => (
              <li key={index}><a herf="#" onClick={(ev) => {this.onChange(el);ev.preventDefault()}}>{el}</a></li>
            ))
          }
        </ul>
      </div>
    }

    return (
      <div className="container search-page">
        <SearchBar placeholder="Search"
          showCancelButton
          value={this.state.value}
          onChange={this.onChange}
          onCancel={() => this.props.history.go(-1)}
        />
        {resultRender}

      </div>
    )
  }
}
