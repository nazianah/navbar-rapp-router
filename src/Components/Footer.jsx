import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h2>Ready to get in touch?</h2>
            <ul>
                <li>NEW BUSINESS INQUIRIES:</li>
                <li><a href="mailto:GlobalNewBusinessInquiries@rapp.com">GlobalNewBusinessInquiries@rapp.com</a></li>
            </ul>
            <ul>
                <li>PRESS INQUIRIES:</li>
                <li><a href="mailto:MediaInquiries@rapp.com">MediaInquiries@rapp.com</a></li>
            </ul>
        </div>
    )
}

export default Footer;
