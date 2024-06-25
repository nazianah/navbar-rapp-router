import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <section className="footer" style={{ backgroundColor: "#FF6B00" }}>
        <div>
          <img
            src="https://www.rapp.com/media/bhghvqam/diversity-and-contact-footer-bar-orange.jpg"
            alt=""
            width="160"
            height="44"
          />
        </div>
        <div className="footer-content">
          <h2>Ready to get in touch?</h2>
          <ul>
            <li>NEW BUSINESS INQUIRIES:</li>
            <li>
              <a href="mailto:GlobalNewBusinessInquiries@rapp.com">
                GlobalNewBusinessInquiries@rapp.com
              </a>
            </li>
          </ul>
          <ul>
            <li>PRESS INQUIRIES:</li>
            <li>
              <a href="mailto:MediaInquiries@rapp.com">
                MediaInquiries@rapp.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="footer-content2">
        <p>
          <strong>RAPP</strong> is an Omnicom Company.{" "}
          <span>© 2024 RAPP. All rights reserved.</span>
        </p>
        <ul>
          <span className="hide">|</span>
          <li>
            <a href="/contact-us/">Contact us</a>
          </li>
          |
          <li>
            <a href="/privacy-policy/">Privacy Policy</a>
          </li>
          |
          <li>
            <a href="/gdpr-privacy-policy/">GDPR Privacy Policy</a>
          </li>
          |
          <li>
            <a href="/cookie-policy/">Cookie Policy</a>
          </li>
        </ul>
        <div className="icons">
          <a
            href="https://www.facebook.com/RAPPWORLDWIDE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.rapp.com/media/bhlo5mab/facebook-icon.svg"
              alt="facebook"
            />
          </a>
          <a
            href="https://twitter.com/RAPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.rapp.com/media/y5sersfw/twitter_logo_resized.svg"
              alt="twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/rappworldwide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.rapp.com/media/cr4jcn3i/instagram-icon.svg"
              alt="instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/rapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.rapp.com/media/fcgo3xfb/linkedin-icon.svg"
              alt="linkedin"
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
