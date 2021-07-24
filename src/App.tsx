import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>

      {/* Header */}
      <header id="header">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      
    </Fragment>
  );
}

export default App;
