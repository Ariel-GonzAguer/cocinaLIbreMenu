import React from "react";
import logo from "/logo.jpg";
import styles from "./Header.module.css";
import useScrollDirection from "../../hooks/useScrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === "down" ? styles.hide : ""
      }`}
    >
      <figure className={styles.logoContainer}>
        <img src={logo} alt="Cocina Libre Logo" className={styles.logo} />
      </figure>
      <nav>
        <ul>
          <li>
            <a href="#deTomar">De tomar</a>
          </li>
          <li>
            <a href="#entradas">Entradas</a>
          </li>
          <li>
            <a href="#callejera">Callejera</a>
          </li>
          <li>
            <a href="#pizzas">Pizzas</a>
          </li>
          <li>
            <a href="#palCafe">Pal´Cafe</a>
          </li>
          <li>
            <a href="#especialidades">Especialidades de la casa</a>
          </li>
          <li>
            <a href="#postres">Postres</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
