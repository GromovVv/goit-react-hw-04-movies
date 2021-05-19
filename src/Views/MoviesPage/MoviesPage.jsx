import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { IMAGE_URL, searchMovies } from '../../Services/MovieApi';

import './MoviesPage.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const { location } = this.props;

    if (location?.state?.searchQuery !== undefined) {
      this.getMoviesByQuery(location.state.searchQuery);
    }
    
  }

  async getMoviesByQuery(query) {
    const response = await searchMovies(query);

    if (query.trim() === '') {
      alert('You need to write correct query to find');
      return;
    }

    this.setState({
      movies: [...response],
    });
  }

  handleChange = event => {
    const value = event.currentTarget.value;

    this.setState({ searchQuery: value });
  };

  handleSubmit = event => {
    const { searchQuery } = this.state;
    const { location, history } = this.props;

    event.preventDefault();

    this.getMoviesByQuery(searchQuery);

    history.push({
      ...location,
      search: `query=${searchQuery}`,
      state: { searchQuery },
    });
  };

  render() {
    const { movies, query } = this.state;

    return (
      <div className="movie-page">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies..."
          />
          <button className="from-btn" type="submit">
            Search
          </button>
        </form>
        <ul className="movie-list">
          {movies.map(({ id, name, title, poster_path }) => {
            return (
              <li key={id} className="movie-item">
                <NavLink to={`/movies/${id}`}>
                  <div className="movie-card">
                    <img
                      className="movie-img"
                      src={IMAGE_URL + poster_path}
                      alt={title || name}
                    />
                    <div className="card-body">
                      <p className="card-title">{title || name}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
