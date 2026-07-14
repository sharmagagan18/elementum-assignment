import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Elementum</h2>
        <p>Creating progress through strategy, design and technology.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <p>Home</p>
          <p>Studio</p>
          <p>Services</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Follow</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>
      </div>

      <p className="copyright">
        © 2026 Elementum. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;