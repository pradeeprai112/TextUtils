import React from 'react';
import PropTypes from 'prop-types';


function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">{props.brandName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="./">{props.home}</a>
                </div>
                </div>
            </div>
        </nav>
    </>
  );
}

Navbar.propTypes = {
    brandName: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    brandName: "Not Defined",
    home: "Not Defined"
  }


export default Navbar;

