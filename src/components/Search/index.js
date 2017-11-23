import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
import SearchResult from './SearchResult'
import Footer from '../common/Footer'
import { Pagination, Icon } from 'antd-mobile'
import SearchMovieAly from '../../util/SearchMovieAly'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '张艺谋',
      currentPage: 1,
      messResult: {
        genreList: [],
        filmmakerList: [],
        movieList: []
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
    this.fetchResult = this.fetchResult.bind(this)
  }

  componentDidMount() {
    this.fetchResult(this.state.value)
  }

  async fetchResult() {
    await this.props.searchActions.searchMovie(this.state.value)
    await this.setState({ messResult: new SearchMovieAly(this.props.SearchResult, this.state.value).getMessResult() })
  }

  onChange(value) {
    this.setState({ value })
    this.fetchResult()
    this.setState({ currentPage: 1 })
  }

  onPageChange(page) {
    this.props.searchActions.searchMovie(this.state.value + '&start=' + (page - 1) * this.props.SearchResult.count)
    this.setState({currentPage: page})
  }

  getPages() {
    const pages = Math.ceil(this.props.SearchResult.total / this.props.SearchResult.count)
    return pages ? pages : 0
  }

  render() {
    const pages = this.getPages();

    return (
      <div className="container search-page">
        <h1>{this.props.SearchResult.title}</h1>
        <SearchBar placeholder="Search"
          showCancelButton
          value={this.state.value}
          onChange={this.onChange}
        />
        <SearchResult {...this.props} messResult={this.state.messResult} />
        {/* <Pagination
          total={pages}
          className="custom-pagination-with-icon"
          current={this.state.currentPage}
          locale={{
            prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
            nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
          }}
          onChange = {this.onPageChange}
        /> */}
        <Footer {...this.props} pageId={'rankTab'}/>
      </div>
    )
  }
}
