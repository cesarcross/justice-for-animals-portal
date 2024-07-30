"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./MobileNavbar.module.css";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? "X" : "☰"}
      </button>
      <nav
        ref={sidebarRef}
        className={`${styles.navbar} ${isOpen ? styles.open : ""}`}
      >
        <Link href="/" className={styles.link} onClick={handleLinkClick}>
          Home
        </Link>
        <Link href="/sobre" className={styles.link} onClick={handleLinkClick}>
          Sobre
        </Link>
        <Link
          href="/denuncia"
          className={styles.link}
          onClick={handleLinkClick}
        >
          Envie sua Denúncia
        </Link>
        <Link
          href="/parceiros"
          className={styles.link}
          onClick={handleLinkClick}
        >
          Parceiros
        </Link>
        <Link href="/login" className={styles.link} onClick={handleLinkClick}>
          Login / Registre-se
        </Link>
      </nav>
    </div>
  );
};
