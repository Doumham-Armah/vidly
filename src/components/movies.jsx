import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from './common/Pagination'
import { paginate } from '../utils/paginate'
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import { filter } from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount= () => {
    this.setState({ movies: getMovies(), genres: getGenres() })
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
    const filteredMovies = this.state.movies.filter(m => m.genre.name === genre)
    this.setState( {movies: filteredMovies})
  }

  render() {

    const { length: count } = this.state.movies;
    //rename movies to allMovies
    const {movies: allMovies, pageSize, currentPage} = this.state

    if (count === 0) return <p>There are no movies in the database.</p>;

    //retuns array of movies for a page number
    const movies = paginate(allMovies, currentPage, pageSize)

    return (
      <div className="row">

        <div className="col-3">
          <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect}/>
        </div>

        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
           moviesCount={count}
           pageSize={this.state.pageSize}
           currentPage={this.state.currentPage}
           onPageChange={this.handlePageChange}/>
          </div>

        
      </div>
    );
  }
}

export default Movies;
