import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">
          <NavLink class="nav-item nav-link" to="/movies">
            Movies <span class="sr-only">(current)</span>
          </NavLink>
          <NavLink class="nav-link" to="/customers">
            Customers <span class="sr-only">(current)</span>
          </NavLink>
          <NavLink class="nav-link" to="/rentals">
            Rentals <span class="sr-only">(current)</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
