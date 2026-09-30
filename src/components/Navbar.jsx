"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
          menuOpen ? "navbar-menu-open" : ""
        }`}
      >
        <div className="navbar-logo">AS</div>

        <nav className="navbar-links">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <a
          href="mailto:sharmaavnii861@gmail.com"
          className="navbar-contact"
        >
          Let's Talk
        </a>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav>
          <Link href="#about" onClick={handleMenuClick}>
            <span>01</span>
            About
          </Link>

          <Link href="#projects" onClick={handleMenuClick}>
            <span>02</span>
            Projects
          </Link>

          <Link href="#skills" onClick={handleMenuClick}>
            <span>03</span>
            Skills
          </Link>

          <Link href="#contact" onClick={handleMenuClick}>
            <span>04</span>
            Contact
          </Link>
        </nav>

        <a
          href="mailto:sharmaavnii861@gmail.com"
          onClick={handleMenuClick}
          className="mobile-menu-email"
        >
          sharmaavnii861@gmail.com
        </a>
      </div>
    </>
  );
}