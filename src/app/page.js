import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
    
        <div className={styles}>
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            lista
          </Link>
          
        </div>
      </main>
      <footer className={styles.footer}>
       Desenvolvido por 
        <Link
          href="https://dayanamariano.dev/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Dayana Mariano
        </Link>
        2025
      </footer>
    </div>
  );
}
