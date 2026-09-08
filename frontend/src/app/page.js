import Link from "next/link";
import styles from "./page.module.css";

function LeafIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7 7 7 0 0 1-7 7Z" />
      <path d="M11 20v-9" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <div className={styles.logo}>
          <LeafIcon />
        </div>
        <h1 className={styles.title}>AgroApp</h1>
        <p className={styles.subtitle}>Gestión agrícola simple para tu campo</p>
        <Link href="/dashboard" className={styles.cta}>
          Ingresar
        </Link>
      </main>
    </div>
  );
}
