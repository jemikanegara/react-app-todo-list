import React from "react";

const Header = props => {
  const { title, desc } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0 bg-fb">
      <div className="container">
        <div className="row bar">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
            <a href="/" className="navbar-brand">
              <h1>{title}</h1>
              <p>{desc}</p>
            </a>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-1 col-sm-12" />
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 mt-3">
            <input
              type="text"
              maxLength="20"
              className="search form-control"
              id="search"
              placeholder="Search . . ."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
