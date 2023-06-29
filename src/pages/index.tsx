// index.tsx
import React from "react";
import styles from "../styles/Home.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["100", "400"], subsets: ["latin"] });

export default function Home() {
  const [advice, setAdvice] = React.useState("");
  const [count, setCount] = React.useState(1);

  function handleClick() {
    setCount((prevState) => prevState + 1);
  }

  React.useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  }, [count]);

  return (
    <main>
      <div className={styles.card}>
        <h3 className={montserrat.className}>Advice No{count}</h3>
        <p className={montserrat.className}>{advice}</p>
        <button className={montserrat.className} onClick={handleClick}>
          generate
        </button>
      </div>
    </main>
  );
}
