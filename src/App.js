import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import PageNotFound from './Views/PageNotFound';
import MovieDetailsPage from './Views/MovieDetailsPage';
// import Cast from './Views/Cast';
// import Reviews from './Views/Reviews';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Nav">
        <ul className="nav-list">
          <li className="nav-list_item">
            <NavLink
            to="/"
            exact
            // className={link}
            // activeClassName={activeLink}
        >
            Home
            </NavLink></li>
          <li>
          <NavLink
            to="/movies"
            // className={link}
            // activeClassName={activeLink}
        >
            Movies
        </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        {/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
        {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
        <Route component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;


// "homepage": "https://GromovVv.github.io/goit-react-hw-04-movies",
