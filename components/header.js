import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <section className="hero is-primary is-small is-bold">
    <div className="hero-head"></div>
    <div className="hero-body">
      <div className="container">
        <h1 class="title">
          <Link to="/" className="has-text-white title">
            Hillary Watts
          </Link>
        </h1>
        <h2 class="subtitle is-bold">
          Senior Web Developer
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active"><a>Portfolio</a></li>
            <li><a>Resume</a></li>
            <li><a>Blog</a></li>
            <li><a>Music</a></li>
            <li><a>Social</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;