import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_left">
          <div className="header_title">
            <a className="logo" href="/">
              <img
                class="tranz"
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
                <Link to="/users">Features</Link>
              </li>
              <li>
                <Link to="/users">Post Features</Link>
              </li>
              <li>
                <Link to="/users"> Categories</Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="header_right">
          <ul class="header_icon_ul">
            <li class="sprite-facebook">
              <a>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="sprite-twitter">
              <a>
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="sprite-pinterest">
              <a>
                <i class="fab fa-pinterest"></i>
              </a>
            </li>
            <li class="sprite-dribbble">
              <a>
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
            <li class="sprite-dribbble">
              <a>
              <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
