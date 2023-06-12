import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <Form>
      <Form.Group controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="posterURL">
        <Form.Label>Poster URL:</Form.Label>
        <Form.Control
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddMovie}>
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovieForm;
