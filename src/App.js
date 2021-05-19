import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import HomePage from './Views/HomePage';
// import MoviesPage from './Views/MoviesPage';
// import MovieDetailsPage from './Views/MovieDetailsPage';
// import PageNotFound from './Views/PageNotFound';

import './App.css';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const PageNotFound = lazy(() =>
  import('./Views/PageNotFound' /* webpackChunkName: "nor-found-page" */),
);

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
            </NavLink>
          </li>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={PageNotFound} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;

// "homepage": "https://GromovVv.github.io/goit-react-hw-04-movies",
