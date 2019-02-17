import React from "react";
import { Link } from "gatsby";
// import Modal from "react-bulma-components/lib/components/modal";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-primary is-spaced"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <h1
              className="navbar-item has-text-weight-bold is-marginless title is-3"
              style={{ marginRight: "2em" }}
            >
              Q<span className="is-sr-only">ueen</span> C
              <span className="is-sr-only">harlton</span>
            </h1>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" activeClassName="is-active" to="/">
                Home
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/hall"
              >
                Hall
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/fete"
              >
                Fete
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/history"
              >
                History
              </Link>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/#news"
              >
                News
              </Link>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <Link
                    className="button"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
