import { Component } from 'react';

import './Cast.scss';

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <ul className="cast-list">
        {cast.map(actor => (
          <li key={actor.id} className="cast-item">
            {actor.profile_path !== null && (
              <img
                className="cast-img"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}` || '../../Images/no-image-available.png'}
                alt={actor.name}
              />
            )}
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
