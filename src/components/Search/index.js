import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
import SearchResult from './SearchResult'
import { Pagination } from 'antd-mobile'
import SearchMovieAly from '../../util/SearchMovieAly'
import { debounce, getQueryKeys } from '../../util/func'



export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: getQueryKeys(this.props.location.search, 'query') || '',
      messResult: {
        genreList: [],
        filmmakerList: [],
        movieList: []
      }
    }
    this.onChange = this.onChange.bind(this)
    this.fetchResult = debounce(500, this.fetchResult);
  }

  componentDidMount() {
    this.state.value && this.fetchResult(this.state.value)
  }

  //手机结果并分析出 分类/影人/作品
  async fetchResult() {
    await this.props.searchActions.searchMovie(this.state.value)
    await this.setState({ messResult: new SearchMovieAly(this.props.SearchResult, this.state.value).getMessResult() })
    //this.props.history.push({ search: `query=${this.state.value}` })  //影响goBack
  }

  onChange(value) {
    this.setState({ value })
    this.fetchResult()
  }

  render() {

    return (
      <div className="container search-page">
        <SearchBar placeholder="Search"
          showCancelButton
          value={this.state.value}
          onChange={this.onChange}
          onCancel={() => this.props.history.go(-1)}
        />
        <SearchResult {...this.props} messResult={this.state.messResult} query={this.state.value} />

      </div>
    )
  }
}
