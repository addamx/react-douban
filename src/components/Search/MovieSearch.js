import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar, Pagination, Icon } from 'antd-mobile'
import { getQueryKeys, debounce } from '../../util/func'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.location.search ? getQueryKeys(this.props.location.search, 'q') : '',
      currentPage: 1
    }
    this.onChange = this.onChange.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
    this.fetchResult = this.fetchResult.bind(this)
    this.getPages = this.getPages.bind(this)
    this.fetchResult = debounce(500, this.fetchResult)
  }

  componentDidMount() {
    this.props.SearchResult.total || this.fetchResult()
  }

  fetchResult() {
    this.props.searchActions.searchMovie(this.state.value)
  }

  onChange(value) {
    this.setState({ value })
    this.fetchResult()
    this.setState({ currentPage: 1 })
  }

  onPageChange(page) {
    this.props.searchActions.searchMovie(this.state.value + '&start=' + (page - 1) * this.props.SearchResult.count)
    this.setState({ currentPage: page })
  }

  getPages() {
    const pages = Math.ceil(this.props.SearchResult.total / this.props.SearchResult.count)
    return pages ? pages : 0
  }

  render() {
    const pages = this.getPages();

    return (
      <div>
        <SearchBar placeholder="Search"
          showCancelButton
          value={this.state.value}
          onChange={this.onChange}
        />
        <div className="movies-container">
          <h5>共{this.props.SearchResult.total}个电影</h5>
          <ul>
            {
              this.props.SearchResult.subjects.map((el, index) => (
                <li key={el.id}>
                  <a href="#" onClick={(e) => { e.preventDefault() }}>
                    <img src={el.images.small} />
                    {el.title}<br />
                    {el.rating.stars}{' '}{el.rating.average.toFixed(1)}<br />
                    {el.directors.length !== 0 && '导演：' +
                      el.directors.reduce((sum, val, index) => {
                        return sum + (index != 0 ? ' / ' : '') + val.name
                    }, '')}
                    <br/>
                    {el.casts.length !== 0 && '主演：' +
                      el.casts.reduce((sum, val, index) => {
                        return sum + (index != 0 ? ' / ' : '') + val.name
                    }, '')}
                  </a>
                </li>
              ))
            }
          </ul>
          <Pagination
            total={pages}
            className="custom-pagination-with-icon"
            current={this.state.currentPage}
            locale={{
              prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
              nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
            }}
            onChange = {this.onPageChange}
          />
        </div>
      </div>
    )
  }
}
