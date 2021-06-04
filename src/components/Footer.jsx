import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>

        <p className="footer-subscription-heading">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testiminals</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investor</Link>
            <Link to="/">Term of Service</Link>
          </div>
          <div className="footer-links-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testiminals</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investor</Link>
            <Link to="/">Term of Service</Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <h2>Videos</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testiminals</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investor</Link>
            <Link to="/">Term of Service</Link>
          </div>
          <div className="footer-links-items">
            <h2>Social Meida</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">Testiminals</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investor</Link>
            <Link to="/">Term of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              LET`SDOIT <i className="fab fa-typo3" />{" "}
            </Link>
          </div>
          <small className="website-rights">LET`SDOIT</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link linkedn"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
