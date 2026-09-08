import styles from "./page.module.css";

function UpIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3 17 10 10 14 14 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 5h18" />
      <path d="M6 12h12" />
      <path d="M10 19h4" />
    </svg>
  );
}

export default function IngresosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Ingresos</h1>
          <p className={styles.subtitle}>Registra las ventas de tus cosechas</p>
        </div>

        <button type="button" className={styles.primaryButton}>
          <PlusIcon />
          Nuevo Ingreso
        </button>
      </header>

      <section className={styles.filterBar} aria-label="Filtros de ingresos">
        <label className={styles.searchBox}>
          <SearchIcon />
          <input type="search" placeholder="Buscar por descripción o comprador..." />
        </label>

        <label className={styles.selectBox}>
          <FilterIcon />
          <select defaultValue="todas">
            <option value="todas">Todas las campañas</option>
            <option value="2024-2025">Campaña 2024/2025</option>
            <option value="2023-2024">Campaña 2023/2024</option>
          </select>
        </label>
      </section>

      <section className={styles.totalCard}>
        <div className={styles.totalLeft}>
          <div className={styles.totalIcon}>
            <UpIcon />
          </div>
          <div>
            <p>Total ingresos mostrados</p>
            <strong>$0</strong>
          </div>
        </div>

        <span>0 registros</span>
      </section>

      <section className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <UpIcon size={32} />
        </div>
        <h2>No hay ingresos</h2>
        <p>Registra tu primera venta para empezar</p>
      </section>
    </div>
  );
}
