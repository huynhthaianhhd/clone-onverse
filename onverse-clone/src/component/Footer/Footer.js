import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_contact_container">
          <div className="footer_contact">
            <a>
              <i class="fab fa-facebook-f"></i>
              <span>FACEBOOK</span>
            </a>
            <a>
              <i class="fab fa-twitter"></i>
              <span>TWITTER</span>
            </a>
            <a>
              <i class="fab fa-pinterest"></i>
              <span>PINTEREST</span>
            </a>
            <a>
              <i class="fab fa-dribbble"></i>
              <span>DRIBBBLE</span>
            </a>
          </div>
        </div>
        <div className="footer_below">
          <ul id="menu-footer-menu" class="bottom-menu">
            <li
              id="menu-item-4731"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4731"
            >
              <a href="http://gutenberg.wpmasters.org/onverse/templates/contact/">
                Contact
              </a>
            </li>
            <li
              id="menu-item-15"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-15"
            >
              <a href="http://gutenberg.wpmasters.org/onverse/category/life/">
                Life
              </a>
            </li>
            <li
              id="menu-item-16"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-16"
            >
              <a href="http://gutenberg.wpmasters.org/onverse/category/photo/">
                Photo
              </a>
            </li>
            <li
              id="menu-item-17"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17"
            >
              <a href="http://gutenberg.wpmasters.org/onverse/category/urban/">
                Urban
              </a>
            </li>
            <li
              id="menu-item-18"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18"
            >
              <a href="http://gutenberg.wpmasters.org/onverse/category/video/">
                Video
              </a>
            </li>
            <li
              id="menu-item-12"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12"
            >
              <a target="_blank" rel="noopener noreferrer" href="#">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
