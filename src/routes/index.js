import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import MovieSearch from '../pages/Search/MovieSearch';
import Movie from '../pages/Movie';
import Filmmaker from '../pages/Filmmaker';
import Rank from '../pages/Rank';

//import NotFound from '../components/common/NotFound';

let basename = '/';
if (__PROD__) {
  basename = '/douban-movie/'
}

const Routes = () => (
  <div className="app">
    <Router basename={basename}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/search-movie" component={MovieSearch} />
        <Route path="/movie" component={Movie} />
        <Route path="/filmmaker" component={Filmmaker} />
        <Route path="/rank" component={Rank} />

        {/* <Route path='/404' component={NotFound} /> */}
        {/* <Redirect from='*' to='/404' /> */}
      </Switch>
    </Router>
  </div>
);

export default Routes;
