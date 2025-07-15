import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>E-Shop</h3>
        <p>Built with ❤️ using Next.js, Firebase & CSS</p>
        <div className="socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
// This component renders the footer section of the e-commerce application.
// It includes the shop name, a brief description, social media links, and copyright information.