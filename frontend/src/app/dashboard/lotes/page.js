import styles from "./page.module.css";

function PinIcon() {
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
      <path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
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

export default function LotesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Lotes</h1>
          <p className={styles.subtitle}>Gestiona los lotes de tus campañas</p>
        </div>

        <button type="button" className={styles.primaryButton}>
          <PlusIcon />
          Nuevo lote
        </button>
      </header>

      <section className={styles.filterBar} aria-label="Filtros de lotes">
        <select className={styles.select} defaultValue="todas">
          <option value="todas">Todas las campañas</option>
          <option value="2024-2025">Campaña 2024/2025</option>
          <option value="2023-2024">Campaña 2023/2024</option>
        </select>

        <p className={styles.totalText}>
          <strong>0.00</strong> ha totales
        </p>
      </section>

      <section className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <PinIcon />
        </div>
        <h2>No hay lotes</h2>
        <p>Crea tu primer lote para empezar</p>
      </section>
    </div>
  );
}
