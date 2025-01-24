import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import Modal from "../Modal";
import { use, useState } from "react";

export default function Card(props) {
  const card = props.card;
  const [openModal, setOpenModal] = useState(false);

  return (
    <li className={styles.card} onClick={() => setOpenModal(!openModal)}>
      <Image
        className={styles.cardImage}
        src={card.images.small}
        alt={card.name}
        width={245}
        height={342}
      />
      <div className={styles.cardInfo}>
        <div className={styles.info}>
          <h2> {card.name} </h2>
          <p>Type {card.types}</p>
        </div>
        <div className={styles.info}>
          <p>{card.rarity}</p>
          <Image
            src={card.set.images.symbol}
            alt={card.name}
            width={28}
            height={28}
            className={styles.infoImage}
          />
        </div>
      </div>
      <Modal isOpen={openModal} setOpenModal={setOpenModal} card={card} />
    </li>
  );
}
