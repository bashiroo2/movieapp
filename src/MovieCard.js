import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        <RatingStars
          count={5}
          value={rating}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
    );
  };

  return (
    <div
      className={`movie-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        <div className="card-front">
          <Card.Img variant="top" src={movie.posterURL} />
        </div>
        <div className="card-back">
          <Card.Body className='text-back-center'>
            <Card.Title className='ok'>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            {renderStars(movie.rating)}
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
