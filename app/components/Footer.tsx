'use client';
import React from 'react';
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Menu */}
        <div className="footer-column">
          <h3>Main Menu</h3>
          <ul>
            <li>
              <Link href="#">
                Shop by Pet
              </Link>
            </li>
            <li>
            <Link href="/Aproducts">
                All Product
              </Link>
            </li>

            <li>
            <Link href="/Our-Story">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="footer-column">
          <h3>Locations</h3>
          <ul>
            <li><a href="https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/@13.7245449,100.4683013,11z/data=!3m1!4b1!4m6!3m5!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651!16zL20vMGZuMmc?hl=th&entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">BKK</a></li>
            <li><a href="https://www.google.co.th/maps/place/%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B9%88%E0%B8%AD+%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3/@13.7245449,100.4683013,11z/data=!4m6!3m5!1s0x311d438bec9d4d35:0x3019237450c50c0!8m2!3d13.6058169!4d100.8677256!16zL20vMDNoeTdz?hl=th&entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">BANG BO</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-column newsletter-column">
          <h3>Newsletter</h3>
          <p>Promotions, new products and sales. Directly to your inbox.</p>
          <div className="newsletter-signup">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom">
        <p>© 2024 Pet Goods &nbsp; | &nbsp; Developed by Phatbophit Wonganan 6211018</p>
        <div className="footer-links">
          <a href="#">Search</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Return Policies</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility Statement</a>
        </div>
        
        <div className="payment-icons">
          {/* Payment logos (replace with actual logo paths if you have them) */}
          <img src="images/pp.png" alt="PP" />
          <img src="images/mc.png" alt="MC" />
          <img src="images/visa.png" alt="Visa" />
          <img src="images/kbank.png" alt="kbank" />
          <img src="images/scb.png" alt="scb" />
          {/* Add more payment icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
