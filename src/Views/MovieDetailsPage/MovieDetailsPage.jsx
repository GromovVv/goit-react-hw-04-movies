import './MovieDetailsPage.scss';

import { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import {
  fetchMovieById,
  // fetchMovieCast,
  // fetchMovieReviews,
  IMAGE_URL,
} from '../../Services/MovieApi';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const movie = await fetchMovieById(movieId);
    // const cast = await fetchMovieCast(movieId);
    // const reviews = await fetchMovieReviews(movieId);

    // this.setState({ movie, cast, reviews });
    this.setState({ movie });

    // console.log(movie, cast, reviews);
    console.log(movie);

    const guy = this.state.movie.genres.map(genre => genre.name);
    console.log(guy);

    const prod = this.state.movie.production_countries.map(prod => prod.name);
    console.log(prod);
  }

  render() {
    const {
      // id,
      title,
      genres,
      poster_path,
      vote_average,
      overview,
      release_date,
      // backdrop_path
    } = this.state.movie;

    return (
      <div>
        {/* <button type="button" onClick={this.onHandleSearch}>Hallo</button> */}
        <h2>{title}</h2>
        <img src={IMAGE_URL + poster_path} alt={title} />
        <p>{`${vote_average} of 10`}</p>
        <p>{`Date of release: ${release_date}`}</p>
        <p>{genres.map(genre => genre.name).join(' / ')}</p>
        {/* <p>{this.state.movie.production_countries.map(prod => prod.name)}</p> */}
        {/* <ul>
          {genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul> */}
        <p>{overview}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
