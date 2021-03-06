import React from "react";
import propTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ moviesCount, pageSize, currentPage, onPageChange }) => {
  console.log(currentPage);
  //this is the numbers of pages we will need
  const pagesCount = Math.ceil(moviesCount / pageSize);

  //if theres only 1 page dont show pagination
  if (pagesCount === 1) return null;

  // an array of number of pages from [1..pagesCount]
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  moviesCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
