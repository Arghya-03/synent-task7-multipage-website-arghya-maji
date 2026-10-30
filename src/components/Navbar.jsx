
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        STUDIO<span>.</span>
      </NavLink>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
        Let's Talk <span>↗</span>
      </NavLink>
    </header>
  );
};

export default Navbar;
