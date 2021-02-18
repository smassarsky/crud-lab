import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => <Review review={review} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;