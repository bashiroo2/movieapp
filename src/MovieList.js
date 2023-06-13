import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Row style={{width:200}}className="movie-list">
      {movies.map((movie, index) => (
        <Col  key={index} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
