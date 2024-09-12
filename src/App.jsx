import React from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import SeccionesComidas from "./components/SeccionesComidas/SeccionesComidas";

export default function App() {
  return (
    <section className={styles.home}>
      <Header />
      <SeccionesComidas />
    </section>
  );
}
