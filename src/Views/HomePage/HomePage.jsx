import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchMovies, IMAGE_URL } from '../../Services/MovieApi';
import './HomePage.scss'


class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await fetchMovies();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props.history;
    return (
      <div className="movies-container">
        <ul className="movie-list">
          {movies.map(({ id, name, title, poster_path }) => {
            return <li key={id} className="movie-item"> 
              <NavLink to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location
                }
              }}>
                <div className="movie-card">
                  <img className="movie-img" src={IMAGE_URL + poster_path} alt={title || name}/>
                  <div className="card-body">
                    <p className="card-title">{title || name}</p>
                  </div>
                </div>
              </NavLink>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage;
