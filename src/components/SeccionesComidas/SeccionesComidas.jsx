import React from "react";

import styles from "./SeccionesComidas.module.css";

export default function SeccionesComidas() {
  return (
    <section className={styles.SeccionDeComidas}>
      <h2 id='deTomar'>De tomar</h2>
      <div>
        <p>cafe ---{'>'} ¢1000 <br />
        <span>Cafe chorreado oscuro o claro</span>
        </p>
        <p>Cafe Ahogado ---{'>'} ¢1900 <br />
        <span>Cafe chorreado oscuro o claro con helado de vainilla Anaki</span></p>
        <p>Cafe con leche ---{'>'} ¢1300 <br />
        <span>Cafe chorreado oscuro o claro con leche de soya</span></p>
        <p>Cacao caliente  ---{'>'} ¢1300 <br />
        <span>Cacao agroecologico bribri, servido con leche de soya caliente</span></p>
        <p>Cacao frio  ---{'>'} ¢1500 <br />
        <span>Cacao agroecologico bribri, servido con leche de soya</span></p>
        <p>Crema  ---{'>'} ¢1500 <br />
        <span>Bebida a base de arroz, maiz y vainilla en leche de soya</span></p>
        <p>Frutas de temporada  ---{'>'} ¢1000 <br />
        <span>Bebida natural con frutas de temporada</span></p>
        <p>Horchata  ---{'>'} ¢1500 <br />
        <span>Bebida a base de arroz, mani y canela en leche de soya</span></p>
        <p>Pinilillo  ---{'>'} ¢1500 <br />
        <span>Bebida a base de maiz con cacao en leche de soya</span></p>
        <p>Resbaladera  ---{'>'} ¢1500 <br />
        <span>Bebida a base de arroz y cebada en leche de soya</span></p>
      </div>
      <h2 id='entradas'>Entradas</h2>
      <div></div>
      <h2 id='callejera'>Callejera</h2>
      <div></div>
      <h2 id='pizzas'>Pizzas</h2>
      <div></div>
      <h2 id='palCafe'>Pal´Cafe</h2>
      <div></div>
      <h2 id='especialidades'>Especialidades de la casa</h2>
      <div></div>
      <h2 id='postres'>Postres</h2>
      <div></div>
    </section>
  );
}
