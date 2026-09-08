import styles from "./page.module.css";

function DownIcon({ size = 18 }) {
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
      <polyline points="3 7 10 14 14 10 21 17" />
      <polyline points="21 10 21 17 14 17" />
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

export default function GastosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Gastos</h1>
          <p className={styles.subtitle}>Registra los costos de tus campañas</p>
        </div>

        <button type="button" className={styles.primaryButton}>
          <PlusIcon />
          Nuevo Gasto
        </button>
      </header>

      <section className={styles.filterBar} aria-label="Filtros de gastos">
        <label className={styles.searchBox}>
          <SearchIcon />
          <input type="search" placeholder="Buscar por descripción o proveedor..." />
        </label>

        <label className={styles.selectBox}>
          <FilterIcon />
          <select defaultValue="todas">
            <option value="todas">Todas las campañas</option>
            <option value="2024-2025">Campaña 2024/2025</option>
            <option value="2023-2024">Campaña 2023/2024</option>
          </select>
        </label>

        <label className={styles.selectBox}>
          <select defaultValue="todas">
            <option value="todas">Todas</option>
            <option value="insumos">Insumos</option>
            <option value="labores">Labores</option>
            <option value="servicios">Servicios</option>
          </select>
        </label>
      </section>

      <section className={styles.totalCard}>
        <div className={styles.totalLeft}>
          <div className={styles.totalIcon}>
            <DownIcon />
          </div>
          <div>
            <p>Total gastos mostrados</p>
            <strong>$0</strong>
          </div>
        </div>

        <span>0 registros</span>
      </section>

      <section className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <DownIcon size={32} />
        </div>
        <h2>No hay gastos</h2>
        <p>Registra tu primer gasto para empezar</p>
      </section>
    </div>
  );
}
