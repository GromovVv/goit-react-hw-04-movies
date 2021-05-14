import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { IMAGE_URL, searchMovies } from '../../Services/MovieApi';

import './MoviesPage.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  async componentDidMount() {}

  async getMoviesByQuery(query) {
    const response = await searchMovies(query);

    if (query.trim() === '') {
      console.log('You need to write correct query to find');
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
    event.preventDefault();

    this.getMoviesByQuery(this.state.searchQuery);
  };

  render() {
    return (
      <div className="movie-page">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            value={this.state.query}
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
          {this.state.movies.map(({ id, name, title, poster_path }) => {
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
