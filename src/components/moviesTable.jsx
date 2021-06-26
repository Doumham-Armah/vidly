import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeaders";

class moviesTable extends Component {
  columns = [
    { colName: "title", label: "Title" },
    { colName: "genre.name", label: "Genre" },
    { colName: "numberInStock", label: "Stock" },
    { colName: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default moviesTable;
