import { Component } from 'react';


import './Reviews.scss'


class Reviews extends Component {
  render() {
    const { reviews } = this.props;

    return reviews.length !== 0 ? (
      <ul className="reviews-list">
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p className="text">{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Sorry, reviews is not found</h3>
    );
  }
}

export default Reviews;