import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import nav from "..//JSON/nav";
import { useNavigate } from "react-router-dom";

function navbarElement(navelement) {
  return (
    <NavItem
      key={navelement.id}
      name={navelement.name}
      liName={navelement.liName}
      icon={navelement.icon}
      link={navelement.link}
    />
  );
}

function Header({ user, setUser }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-door-open"></i> DOOR TO DOOR
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {user ? (
            <li className="nav-item">
              <span className="nav-link">Welcome, {user.username}</span>
              <button
                className="btn btn-link nav-link"
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="fas fa-user"></i> Login
              </Link>
            </li>
          )}
          {nav.map(navbarElement)}
        </ul>
      </div>
    </nav>
  );
}
export default Header;
