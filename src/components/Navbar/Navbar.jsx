import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Elementum</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className="menu">☰</div>

    </nav>
  );
}

export default Navbar;