import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";



export default function Card(props) {
  const card = props.card;

  return (
    <li onClick={()=> console.log("clicou")}>
      <Image
        src={card.images.small}
        alt={card.name}
        width={280}
        height={394.28}
      />
      <div className={styles.cardInfo}>
        <div className={styles.info}>
            <h2 > {card.name} </h2>
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
        {/* <Link
          to={{
            pathname: "/movie/" + card.id,
          }}
          state={card}
          id="buttonDetails"
        >
          {" "}
          Details
        </Link> */}
      </div>
    </li>
  );
}
