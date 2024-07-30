"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MobileNavbar } from "@/components/mobileNavbar/MobileNavbar";
import Banner from "../banner/Banner";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    setHasMounted(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Avoid server-client mismatch by only rendering the component after mounting
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <>
          <MobileNavbar />
          <Banner />
        </>
      ) : (
        <>
          <nav className={styles.navbar}>
            <div className={styles.linksContainer}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/sobre" className={styles.link}>
                Sobre
              </Link>
              {/* <Link href="/conheca" className={styles.link}>
              Conheça as Leis
            </Link> */}
              <Link href="/denuncia" className={styles.link}>
                Envie sua Denúncia
              </Link>
              <Link href="/parceiros" className={styles.link}>
                Parceiros
              </Link>
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
