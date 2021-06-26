import React from "react";

const MovieForm = ({ match }) => {
  return (
    <div className="MovieForm">
      <h1>Movie Form</h1>
      <p>{match.params.id}</p>
    </div>
  );
};

export default MovieForm;
