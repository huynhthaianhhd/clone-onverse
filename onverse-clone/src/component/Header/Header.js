import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_left">
          <div className="header_title">
            <Link to="/" className="logo">
              <img
                className="tranz"
                src="http://gutenberg.wpmasters.org/onverse/wp-content/uploads/sites/2/2018/09/onverse-logo-1.png"
                alt="Onverse"
              />
            </Link>
          </div>
          <div className="header_nav">
            <ul className="header_nav_ul top_menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">
                  Features <span>&#9660;</span>
                </Link>
                <ul className="second-level-menu child ">
                  <li><Link to="/">Full Width</Link></li>
                  <li><Link to="/">Error 404</Link></li>
                  <li>
                    <Link className ="second-level-menu-next parent" to="/">Shortcodes</Link>
                    <ul className="third-level-menu">
                    <li><Link to="/">Columns</Link></li>
                    <li><Link to="/">Infor Box</Link></li>
                    <li><Link to="/">Buttons and Links</Link></li>
                    <li><Link to="/">Toggle</Link></li>
                    <li><Link to="/">Typography</Link></li>
                    <li><Link to="/">Tabs</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </li>
              <li >
                <Link to="/">
                  Post Features <span>&#9660;</span>
                </Link>
                <ul className="second-level-menu child">
                  <li><Link to="/">Gallery Post</Link></li>
                  <li><Link to="/">Audio Post</Link></li>
                  <li><Link to="/">Video Post</Link></li>
                  <li><Link to="/">Tesing A Pagination</Link></li>
                  <li><Link to="/">Tesing Images</Link></li>
                  <li><Link to="/">Embeds in the Post</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  Categories <span>&#9660;</span>
                </Link>
                <ul className="second-level-menu child">
                  <li><Link to="/">Food</Link></li>
                  <li><Link to="/">Life</Link></li>
                  <li><Link to="/">Trending</Link></li>
                  <li><Link to="/">Urban</Link></li>
                  <li><Link to="/">Video</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="header_right">
          <ul className="header_icon_ul">
            <li className="sprite-facebook">
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="sprite-twitter">
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="sprite-pinterest">
              <Link to="/">
                <i className="fab fa-pinterest"></i>
              </Link>
            </li>
            <li className="sprite-dribbble">
              <Link to="/">
                <i className="fab fa-dribbble"></i>
              </Link>
            </li>
            <li className="sprite-dribbble">
              <Link to="/">
                <i className="fa fa-search" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 