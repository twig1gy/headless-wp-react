import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar is-primary">
    <div className="container has-text-centered">
      <div className="navbar-brand">
        <p className="is-size-3">
          <Link to="/" className="has-text-white">
            Hillary M. Watts
          </Link>
        </p>
      </div>
    </div>
  </nav>
);

export default Header;