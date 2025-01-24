import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";
import List from "./components/List";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
          <List/>
      </main>
      <footer className={styles.footer}>
       Desenvolvido por 
        <Link
          href="https://dayanamariano.dev/"
          target="_blank"
          >
          Dayana Mariano
        </Link>
        2025
      </footer>
    </div>
  );
}
