import './MovieDetailsPage.scss';

import { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// import Cast from './Views/Cast';
// import Reviews from './Views/Reviews';

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
    // console.log(movie);

  }

  render() {
    const {
      id,
      title,
      genres,
      poster_path,
      vote_average,
      overview,
      release_date,
      // backdrop_path
    } = this.state.movie;

    return (
      id !== undefined && (
        <div>
        <button type="button" >Back</button>
        <h2>{title}</h2>
        <img src={IMAGE_URL + poster_path} alt={title} />
        <p>{`${vote_average} of 10`}</p>
        <p>{`Date of release: ${release_date}`}</p>
        <p>{genres !== undefined ? genres.map(genre => genre.name).join(' / ') : ''}</p>

        {/* <ul>
          {genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul> */}
        <p>{overview}</p>
        </div>
      )
    )
     
  }
}

export default MovieDetailsPage;
