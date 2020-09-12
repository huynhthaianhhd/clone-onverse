import React, { Component } from "react";
import "./Footer.css";
import {
  Link
} from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_contact_container">
          <div className="footer_contact">
            <Link className="facebook" to="/">
              <i className="fab fa-facebook-f"></i>
              <span>FACEBOOK</span>
            </Link>
            <Link className="twitter" to="/">
              <i className="fab fa-twitter"></i>
              <span>TWITTER</span>
            </Link>
            <Link className="pinterest" to="/">
              <i className="fab fa-pinterest"></i>
              <span>PINTEREST</span>
            </Link>
            <Link className="dribbble" to="/">
              <i className="fab fa-dribbble"></i>
              <span>DRIBBBLE</span>
            </Link>
          </div>
        </div>
        <div className="footer_below_container">
          <ul className="footer_below">
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li className="bullet">
              <Link to="/">Life</Link>
            </li>
            <li className="bullet">
              <Link to="/">Photo</Link>
            </li>
            <li className="bullet">
              <Link to="/">Urban</Link>
            </li>
            <li className="bullet">
              <Link to="/">Video</Link>
            </li>
            <li className="bullet">
              <Link to="/">Buy Now</Link>
            </li>
          </ul>
        </div>
        <div className="footer_text">© 2018 Onverse - Gutenberg Powered Blog Theme. All rights reserved</div>
      </div>
    );
  }
}
