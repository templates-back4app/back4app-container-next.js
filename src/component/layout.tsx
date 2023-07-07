// layout.tsx
import React from "react";
import styles from "../styles/Home.module.css";
import { Comforter } from "next/font/google";

const comforter = Comforter({
  weight: ["400"],
  subsets: ["latin"],
});

function Layout(props: any) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={comforter.className}>Advice generator</h1>
      </header>
      {props.children}
    </>
  );
}

export default Layout;
