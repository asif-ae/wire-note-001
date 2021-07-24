import React, { Fragment } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <Fragment>

      {/* Header */}
      <header id="header">
        <nav className="navbar navbar-dark bg-navy">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Wire Note</a>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>

      <div className="container">
        <Tasks />
      </div>
    </Fragment>
  );
}

export default App;
