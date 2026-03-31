"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        {/* Logo */}
        <Link href="/" style={styles.logo}>
           <div style={{
    width: "100%",
    height: "100%",
    backgroundImage: "url(/apprentice_hub_logo.svg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.nav}>
          <Link href="/" style={{ ...styles.navLink, ...styles.navLinkActive }}>
            Home
          </Link>
          <Link href="/apprenticeships" style={styles.navLink}>
            Apprenticeships
          </Link>
          <Link href="/application" style={styles.navLink}>
            Application
          </Link>
          <Link href="/resources" style={styles.navLink}>
            Resources
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div style={styles.authButtons}>
          <Link href="/login" style={styles.loginBtn}>
            Log in
          </Link>
          <Link href="/signup" style={styles.ctaBtn}>
            Create free account →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {["Home", "Apprenticeships", "Application", "Resources"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/login" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
          <Link href="/signup" style={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Create free account
          </Link>
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    backgroundColor: "#1a3a2e",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },
  inner: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "32px",
  },
  logo: {
	height:"40px",
	  width:"200px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoBox: {
    backgroundColor: "#ffffff",
    color: "#1a3a2e",
    fontWeight: 700,
    fontSize: "13px",
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "-0.5px",
  },
  logoText: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "16px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flex: 1,
    justifyContent: "center",
  },
  navLink: {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
    transition: "color 0.2s",
  },
  navLinkActive: {
    color: "#ffffff",
    borderBottom: "2px solid #ffffff",
    paddingBottom: "2px",
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
  },
  loginBtn: {
    color: "#e8845c",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  },
  ctaBtn: {
    backgroundColor: "#ffffff",
    color: "#1a3a2e",
    padding: "8px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background 0.2s",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  bar: {
    display: "block",
    width: "22px",
    height: "2px",
    backgroundColor: "#ffffff",
    borderRadius: "2px",
  },
  mobileMenu: {
    backgroundColor: "#1a3a2e",
    padding: "12px 24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  mobileLink: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    padding: "6px 0",
  },
  mobileCta: {
    backgroundColor: "#e8845c",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    textAlign: "center",
    marginTop: "4px",
  },
};