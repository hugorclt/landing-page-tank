"use client";
import styles from "./page.module.css";
import tankLogo from "../../../public/logo_tank.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const navBarRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
// 	console.log(window.scrollY);
// 	if (window.scrollY >= navBarRef.current!.offsetTop) {
// 		setSticky(true);
// 	} else
// 		setSticky(false);
//   }, [window.scrollY])

  return (
    <div>
      <div ref={navBarRef} className={styles.navbarContainer}>
        <div className={styles.navbarRow}>
          <div className={styles.navbarLeft}>
            <a href="/" aria-current="page">
              <Image alt="tank-logo" src={tankLogo}></Image>
            </a>
            <nav className={styles.navbarLinks}>
              <a href="/">Établissement</a>
              <a href="/">Candidat</a>
              <a href="/">Blog</a>
            </nav>
          </div>
          <div className={styles.navbarRight}>
            <div className={`${styles.buttonWrapper} button-small`}>
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
        <div className={`${styles.dropDown} ${isSticky ? styles.sticky : ""}`}>
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
