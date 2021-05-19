import './MovieDetailsPage.scss';

import { Component } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';

import Cast from '../Cast';
import Reviews from '../Reviews';

import {
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
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
    const cast = await fetchMovieCast(movieId);
    const reviews = await fetchMovieReviews(movieId);

    this.setState({ movie, cast, reviews });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    console.log(location);
    console.log(history);
    history.push(location?.state?.from || '/');
  };

  render() {
    const {
      id,
      title,
      genres,
      poster_path,
      vote_average,
      overview,
      release_date,
    } = this.state.movie;

    const { url, path } = this.props.match;

    // const { from } = this.props.history.location.state;
    
    console.log(this.props.history.location.state);

    const { cast, reviews } = this.state;


    return (
      id !== undefined && (
        <div>
          <button type="button" onClick={this.handleGoBack}>Back</button>
          <div className="card-wrapperr">
            <h2>{title}</h2>
            <img src={IMAGE_URL + poster_path} alt={title} />
            <p>{`Rating:  ${vote_average} of 10`}</p>
            <p>{`Date of release:   ${release_date}`}</p>
            <p>
              {genres !== undefined
                ? genres.map(genre => genre.name).join(' / ')
                : ''}
            </p>

            <p>{overview}</p>
          </div>
          <h3>Additional information</h3>
          <ul>
          <NavLink
              to={{
                pathname: `${url}/cast`,
                // state: {
                //   from,
                // },
              }}
            >
              Cast
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                // state: {
                //   from,
                // },
              }}
            >
              Films Reviews
            </NavLink>{' '}
          </ul>
          <Switch>
            <Route
              path={`${path}/cast`}
              render={props => {
                return (
                  <Cast
                    {...props}
                    cast={cast}
                    onClick={this.handleGoBack}
                  />
                );
              }}
            />
            <Route
              path={`${path}/reviews`}
              render={props => {
                return <Reviews {...props} reviews={reviews} />;
              }}
            />
          </Switch>
        </div>
      )
    );
  }
}

export default withRouter(MovieDetailsPage);
