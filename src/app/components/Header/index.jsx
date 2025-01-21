import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link
          href="/" 
          target="_self"
        >
            <Image
            src="/pokemonlogo.png"
            alt="File icon"
            width={158.32}
            height={64.04}
            />
        </Link>
        <nav className={styles.nav}>
          <Link
            href="https://pokemontcg.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </Link>
        </nav>
      </header>
    </>
  );
}
