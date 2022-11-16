import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src="https://i0.wp.com/www.readingorders.net/wp-content/uploads/2017/03/star-wars-logo-gold.jpg?w=702"
            className="logo"
          />
        </Link>
        <div className="ml-auto nav-item dropdown">
          <button
            className="btn btn-primary dropdown-toggle ddt"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>
              Favorites (
              {store.favorites.length > 0 ? store.favorites.length : 0})
            </strong>
          </button>
          <ul
            className="dropdown-menu ddt"
            aria-labelledby="navbarScrollingDropdown"
          >
            {store.favorites.map((fav) => {
              return (
                <li key={fav.name}>
                  <a href="#" className="dropdown-item">
                    {fav.name}{" "}
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={(event) => actions.toggleFavorite(fav)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {!store.token ? (
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              <strong>Log in</strong>
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => actions.logout()}
          >
            <strong>Log out</strong>
          </button>
        )}
      </div>
    </nav>
  );
};
