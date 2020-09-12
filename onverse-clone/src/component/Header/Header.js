import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_left">
          <div className="header_title">
            <a className="logo">
              <img
                className="tranz"
                src="http://gutenberg.wpmasters.org/onverse/wp-content/uploads/sites/2/2018/09/onverse-logo-1.png"
                alt="Onverse"
              />
            </a>
          </div>
          <div className="header_nav">
            <ul className="header_nav_ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">
                  Features <span>&#9660;</span>
                </Link>
              </li>
              <li>
                <Link to="/users">
                  Post Features <span>&#9660;</span>
                </Link>
              </li>
              <li>
                <Link to="/users">
                  {" "}
                  Categories <span>&#9660;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="header_right">
          <ul className="header_icon_ul">
            <li className="sprite-facebook">
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="sprite-twitter">
              <a>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="sprite-pinterest">
              <a>
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li className="sprite-dribbble">
              <a>
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="sprite-dribbble">
              <a>
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
