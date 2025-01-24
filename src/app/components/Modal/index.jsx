import styles from "../../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Modal({ isOpen, setOpenModal, card }) {
  if (isOpen) {
    console.log("abriu");
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.titleModal}>
            <h3>{card.name}</h3>
            <Image
              src="/x.png"
              width={14.22}
              height={14.22}
              onClick={() => setOpenModal(!isOpen)}
              alt="close"
            />
          </div>
          <div className={styles.details}>
            <Image
              className={styles.modalImage}
              src={card.images.large}
              alt={card.name}
              width={245}
              height={342}
            />
            <div className={styles.tags}>
              <ul className={styles.modalList}>
                {card.types
                  ? card.types.map((type) => (
                      <li key={card.types}>{card.types}</li>
                    ))
                  : null}
              </ul>
              <ul className={styles.modalList}>
                {card.subtypes
                  ? card.subtypes.map((subtype) => (
                      <li key={card.subtypes}>{card.subtypes}</li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div className={styles.modalInfoGroup}>
            <div className={styles.modalInfo}>
              <div className={styles.modalInfoRow}>
                <Image
                  src="/Group 240.svg"
                  alt={card.name}
                  width={18}
                  height={18}
                />
                <p>{card.set.id}</p>
              </div>
              <p>Conjunto</p>
            </div>
            <div className={styles.modalInfo}>
              <div className={styles.modalInfoRow}>
                <Image
                  src="/Group 240.svg"
                  alt={card.name}
                  width={18}
                  height={18}
                />
                <p>{card.set.series}</p>
              </div>
              <p>Séries</p>
            </div>
            <div className={styles.modalInfo}>
              <div className={styles.modalInfoRow}>
                <Image
                  src="/Group 240.svg"
                  alt={card.name}
                  width={18}
                  height={18}
                />
                <p>{card.hp}</p>
              </div>
              <p>Hp</p>
            </div>
          </div>
          {card.evolvesTo && (
            <p className={styles.elvolvesTo}>
              Desenvolve para {card.evolvesTo}
            </p>
          )}
          <ul className={styles.attacks}>
            {card.attacks
              ? card.attacks.map((attack) => <li>{card.attacks.text}</li>)
              : null}
          </ul>
          <ul className={styles.rules}>
            {card.rules
              ? card.rules.map((rule) => <li>{card.rules}</li>)
              : null}
          </ul>
          <Link
            href={card.tcgplayer.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBuyThisCard}
          >
            Compre este cartão
          </Link>
        </div>
      </div>
    );
  } else {
    console.log("fechou");
  }
  return null;
}
