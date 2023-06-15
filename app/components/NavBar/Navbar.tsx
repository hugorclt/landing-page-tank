"use client";
import styles from "./page.module.css";
import tankLogo from "../../../public/logo_tank.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > navbarRef.current!.offsetTop ? setIsSticky(true) : setIsSticky(false);
    }
  };

  return (
    <div ref={navbarRef} className={isSticky ? styles.sticky : ""}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarRow}>
          <div className={styles.navbarLeft}>
            <a href="/" aria-current="page">
              <Image alt="tank-logo" src={tankLogo}></Image>
            </a>
            <nav className={styles.navbarLinks}>
              <a href="/">Établissement</a>
              <div className={styles.separator}></div>
              <a href="/">Candidat</a>
              <div className={styles.separator}></div>
              <a href="/">Blog</a>
            </nav>
          </div>
          <div className={styles.navbarRight}>
            <div className={`${styles.buttonWrapper}`}>
              <a href="https://app.tankyou.care" target="_blank">
                Commencer
              </a>
            </div>
            <div
              className={styles.burgerMenu}
              onClick={() => setIsOpen(!isOpen)}>
              <RxHamburgerMenu size={32} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.dropDown}`}>
          <nav>
            <a href="/">Établissement</a>
            <a href="/">Candidat</a>
            <a href="/">Blog</a>
          </nav>
        </div>
      )}
    </div>
  );
}
