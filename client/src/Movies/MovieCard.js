import React from 'react';
import { Link } from 'react-router-dom';
import movieDelete from '../components/movieDelete';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <Link to={`/update-movie/${id}`}>
        <button className="edit-button">Edit</button>
      </Link>
      <Link to='/'>
        <button onClick={() => movieDelete(props.movie)}>Delete</button>
      </Link>
    </div>
  );
};

export default MovieCard;
