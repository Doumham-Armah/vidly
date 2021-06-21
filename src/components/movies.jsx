import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from './common/Pagination'
import { paginate } from '../utils/paginate'
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount= () => {

    const genres = [{name: "All Genres"}, ...getGenres()]
    this.setState({ movies: getMovies(), genres: genres })
  }

  handlePageChange = pageNum => {
    this.setState({ currentPage: pageNum })
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  render() {

    const { length: count } = this.state.movies;

    //rename movies to allMovies
    const {movies: allMovies, pageSize, currentPage, selectedGenre} = this.state

    if (count === 0) return <p>There are no movies in the database.</p>;

    // returns movies filtered by genre
    // if selected genre and its id are truthy filter, else return all movies
    const filteredMovies = selectedGenre && selectedGenre._id
     ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
   
    //retuns array of movies for a page number
    const movies = paginate(filteredMovies, currentPage, pageSize)

    return (
      <div className="row">

        <div className="col-3">
          <ListGroup items={this.state.genres}
           selectedItem={this.state.selectedGenre}
           onItemSelect={this.handleGenreSelect}
           />
        </div>

        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database.</p>

          <MoviesTable
          movies={movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}/>
          
          <Pagination
           moviesCount={filteredMovies.length}
           pageSize={this.state.pageSize}
           currentPage={this.state.currentPage}
           onPageChange={this.handlePageChange}/>
        </div>

        
      </div>
    );
  }
}

export default Movies;
