import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
const primary = () => {
    
}
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn btn-primary btn-sm mx-1" onClick={primary}>Primary</button>
                    <button type="button" className="btn btn-secondary btn-sm mx-1">Secondary</button>
                    <button type="button" className="btn btn-success btn-sm mx-1">Success</button>
                    <button type="button" className="btn btn-danger btn-sm mx-1">Danger</button>
                    <button type="button" className="btn btn-warning btn-sm mx-1">Warning</button>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?'dark':'light'}`} Mode</label>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set Title Here'
  };