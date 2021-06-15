import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <ul className="terms">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <div className="contacts">
        <h3>Contacts</h3>
        <p>jansabbas@gmail.com</p>
      </div>
      <div className="sponsors">
        <h3>Sponsors</h3>
        <a href="https://iuea.ac.ug/">International University of East Africa</a>
      </div>
      <p className="cc mt-sm-4">&copy; art-ug 2021</p>
    </div>
  )
}

export default Footer;
