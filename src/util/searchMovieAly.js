import { unique } from './func'

export default class {

  constructor(result, keyword) {
    this.result = result
    this.keyword = keyword
    this.filmmakers = []
    this.genres = []
  }

  /**
   * 获取影人(演员/导演)
   */
  getFilmmakers() {
    let _res = []
    this.result.subjects.map((el, index) => {
      _res = _res.concat(el.casts, el.directors)
    })
    this.filmmakers = unique(_res, 'id')
    return this.filmmakers
  }

  /**
   * 获取流派/tag
   */
  getGenres() {
    let _res = []
    this.result.subjects.map((el, index) => {
      _res = _res.concat(el.genres)
    })
    this.genres = Array.from(new Set(_res))
    return this.genres
  }

  getMessResult() {
    let _filmmakers = []
    this.getFilmmakers().map((el) => {
      new RegExp(this.keyword, 'gi').test(el.name) && _filmmakers.push(el)
    })
    return {
      filmmakerList: _filmmakers,
      genreList: this.getGenres(),
      movieList: this.result.subjects
    }
  }
}

