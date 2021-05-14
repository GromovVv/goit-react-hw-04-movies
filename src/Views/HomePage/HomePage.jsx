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
    return (
      <div className="movies-container">
        <ul className="movie-list">
          {this.state.movies.map(({ id, name, title, poster_path }) => {
            return <li key={id} className="movie-item"> 
              <NavLink to={`/movies/${id}`}>
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
