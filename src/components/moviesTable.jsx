import { sortBy } from "lodash";
import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeaders";

class moviesTable extends Component {
  columns = [
    { colName: "title", label: "Title" },
    { colName: "genre.name", label: "Genre" },
    { colName: "numberInStock", label: "Stock" },
    { colName: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  render() {
    const { movies, sortColumn, onLike, onDelete, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default moviesTable;
