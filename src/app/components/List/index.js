"use client";
import styles from "../../page.module.css";
import Card from "../Card";
import { useState, useEffect } from "react";

export default function List() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const url = "https://api.pokemontcg.io/v2/cards/";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setCards(json))
      .catch((err) => console.error("error:" + err));
  }, []);

//   pokemons.card.all().then((cards) => {
//     console.log(cards[0].name); // "Blastoise"
//   });
console.log(cards)

  return (
    <div className={styles.listDiv}>
      <ul className={styles.list}>
          {cards ? cards.data.map((card) => (
            <Card key={card.id} card={card} />
          )) : (
            <p>Carregando Pokémons...</p>
          )}
      </ul>
    </div>
  );
}
