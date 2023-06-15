"use client";
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./page.module.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <div
      className={styles.buttonScroll}
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}>
      <img src="https://assets.website-files.com/6481fe5eec8eb229837417e3/6481fe5eec8eb229837418b2_icon-dropdown-arrow-small-dark.svg" />
    </div>
  );
};

export default ScrollTop;
