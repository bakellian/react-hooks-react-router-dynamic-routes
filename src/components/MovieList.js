import React from "react";
import { Link } from "react-router-dom";

// The movies prop is an object containing each movie. To iterate over this object, we are using Object.keys(movies) to get an array of keys, then mapping over this array. Since the keys in the object are also the id values for each movie, the elements in .map() are referred to as movieID. We are using movieID directly in the key attribute, and also using it to get information from the movies object, as we see with movies[movieID].title.

function MoviesList({ movies }) {
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;