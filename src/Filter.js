import React from 'react';
import RatingStars from 'react-rating-stars-component';
import { Form } from 'react-bootstrap';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  const handleTitleChange = (event) => {
    onTitleChange(event.target.value);
  };

  const handleRateChange = (value) => {
    onRateChange(value.toString());
  };

  return (
    <Form className="filter-form">
      <Form.Group controlId="titleFilter">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} />
      </Form.Group>

      <Form.Group controlId="ratingFilter">
        <Form.Label>Rating</Form.Label>
        <RatingStars
          count={5}
          value={parseInt(rate)}
          size={24}
          activeColor="#ffd700"
          onChange={handleRateChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
