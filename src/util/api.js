/**
 * Created by 0easy-23 on 2017/9/13.
 */
let API = {
  in_theaters: '/api/movie/in_theaters',
  coming_soon: '/api/movie/coming_soon',
  search_movie: '/api/movie/search',
  get_movie: '/api/movie/subject',
  get_filmmaker: '/api/movie/celebrity',
  top_in_all: '/api/movie/top250',
  top_in_na: '/api/movie/us_box'
};

if (__PROD__) {
  API = {
    in_theaters: 'https://api.douban.com/v2/movie/in_theaters',
    coming_soon: 'https://api.douban.com/v2/movie/coming_soon',
    search_movie: 'https://api.douban.com/v2/movie/search',
    get_movie: 'https://api.douban.com/v2/movie/subject',
    get_filmmaker: 'https://api.douban.com/v2/movie/celebrity',
    top_in_all: 'https://api.douban.com/v2/movie/top250',
    top_in_na: 'https://api.douban.com/v2/movie/us_box'
  };
}


export default API;
