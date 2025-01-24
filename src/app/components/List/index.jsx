"use client";
import styles from "../../page.module.css";
import Card from "../Card";
import { useState, useEffect } from "react";

export default function List() {
  const [cards, setCards] = useState(null);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil((cards?.totalCount || 0) / 20);
  const paginationStart = page - 2 < 1 ? 1 : page > totalPages - 5 ? totalPages - 5 : page - 2;
  const paginationPages = [...Array(5)].map((element, index) => index + paginationStart)

  function fetchCards(page) {
    setPage(page);
    const url = `https://api.pokemontcg.io/v2/cards?pageSize=20&page=${page}`;
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
  }

  useEffect(() => {
    fetchCards(1);
  }, []);

  console.log(cards);

  return (
    <div className={styles.listDiv}>
      <ul className={styles.list}>
        {cards ? (
          cards.data.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <p>Carregando Pokémons...</p>
        )}
      </ul>
      <div className={styles.pagination}>
        {paginationPages.map((element) => (
          <button x onClick={() => fetchCards(element)}>{element}</button>
        ))}

      </div>
    </div>
  );
}
