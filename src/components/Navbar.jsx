"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { IKImage } from "imagekitio-react";


export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname() || "/";

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const isActive = (href) => pathname === href;
  const isDropdownActive = (prefix) => pathname.startsWith(prefix);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const qaLinks = [
    "church",
    "faith-doubt",
    "homosexuality",
    "living-christianity",
    "personal-matters",
    "politics",
    "prayer",
    "marriage",
    "dating",
  ];

  return (
    <nav className={styles.navbar} ref={navRef}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <Link href="/" onClick={closeAllMenus}>
          <IKImage
            path="/logo.png"
            alt="Only Jesus Logo"
            className={styles.logoImg}
            loading="lazy"
            lqip={{ active: true }}
            transformation={[{ width: 200, quality: 90 }]}
          />
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen((prev) => !prev);
        }}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Menu */}
      <div
        className={`${styles.navMain} ${
          isMobileMenuOpen ? styles.showMenu : ""
        }`}
      >
        <ul className={styles.navLinks}>
          {/* Home */}
          <li className={isActive("/") ? styles.active : ""}>
            <Link href="/" onClick={closeAllMenus}>Home</Link>
          </li>

          {/* About */}
          <li
            className={`${styles.dropdown} ${
              isDropdownActive("/about") ? styles.active : ""
            }`}
          >
            <button
              onClick={() => toggleDropdown("about")}
              className={styles.dropbtn}
              aria-expanded={openDropdown === "about"}
            >
              About ▾
            </button>
            {openDropdown === "about" && (
              <ul className={styles.dropdownContent}>
                <li className={isActive("/about/aboutus") ? styles.active : ""}>
                  <Link href="/about/aboutus" onClick={closeAllMenus}>
                    About Us
                  </Link>
                </li>
                <li
                  className={
                    isActive("/about/minchakpu")
                      ? styles.active
                      : ""
                  }
                >
                  <Link
                    href="/about/minchakpu"
                    onClick={closeAllMenus}
                  >
                    KC Minchakpu
                  </Link>
                </li>
                <li
                  className={
                    isActive("/about/contributors") ? styles.active : ""
                  }
                >
                  <Link href="/about/contributors" onClick={closeAllMenus}>
                    Contributors & Authors
                  </Link>
                </li>
                <li className={isActive("/about/contact") ? styles.active : ""}>
                  <Link href="/about/contact" onClick={closeAllMenus}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Q & A */}
          <li
            className={`${styles.dropdown} ${
              isDropdownActive("/qa") ? styles.active : ""
            }`}
          >
            <button
              onClick={() => toggleDropdown("qa")}
              className={styles.dropbtn}
              aria-expanded={openDropdown === "qa"}
            >
              Q & A ▾
            </button>
            {openDropdown === "qa" && (
              <ul className={styles.dropdownContent}>
                {qaLinks.map((slug) => (
                  <li
                    key={slug}
                    className={isActive(`/qa/${slug}`) ? styles.active : ""}
                  >
                    <Link
                      href={`/qa/${slug}`}
                      onClick={closeAllMenus}
                    >
                      {slug
                        .replace("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Books & Articles */}
          {["books", "articles"].map((page) => (
            <li
              key={page}
              className={isActive(`/${page}`) ? styles.active : ""}
            >
              <Link href={`/${page}`} onClick={closeAllMenus}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}

         
        </ul>
      </div>
    </nav>
  );
}
