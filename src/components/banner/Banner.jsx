"use client";

import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Link href="/" className={styles.text}>
        <p>JUSTIÇA AOS ANIMAIS</p>
      </Link>
    </div>
  );
};

export default Banner;
