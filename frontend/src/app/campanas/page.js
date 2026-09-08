import styles from "./page.module.css";

function LeafIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7 7 7 0 0 1-7 7Z" />
      <path d="M11 20v-9" />
      <path d="M5 13c4 0 7-2 9-5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function CampanasPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Campañas</h1>
          <p className={styles.subtitle}>Gestiona tus campañas agrícolas</p>
        </div>

        <button type="button" className={styles.primaryButton}>
          <PlusIcon />
          Nueva Campaña
        </button>
      </header>

      <section className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <LeafIcon />
        </div>
        <h2>No hay campañas</h2>
        <p>Crea tu primera campaña para empezar</p>
      </section>
    </div>
  );
}
