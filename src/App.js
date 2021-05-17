import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import PageNotFound from './Views/PageNotFound';
import MovieDetailsPage from './Views/MovieDetailsPage';


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
        <Route component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;


// "homepage": "https://GromovVv.github.io/goit-react-hw-04-movies",
