import styles from "./page.module.css";

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7 7 7 0 0 1-7 7Z" />
      <path d="M11 20v-9" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M6 6h12" />
      <path d="M4 6l-3 6a3 3 0 0 0 6 0Z" />
      <path d="M20 6l-3 6a3 3 0 0 0 6 0Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Resumen general de tus campañas</p>
      </header>

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryTop}>
            <div>
              <div className={styles.summaryLabel}>Campañas Activas</div>
            </div>
            <div className={styles.summaryIcon}>
              <LeafIcon />
            </div>
          </div>
          <div className={styles.summaryValue}>0</div>
          <div className={styles.summaryRows}>
            <div className={styles.summaryRow}>
              <span>Gastos</span>
              <span className={styles.neg}>$0</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Ingresos</span>
              <span className={styles.pos}>$0</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Balance</span>
              <span className={styles.pos}>$0</span>
            </div>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryTop}>
            <div>
              <div className={styles.summaryLabel}>Balance Total</div>
              <div className={styles.summarySub}>Todas las campañas</div>
            </div>
            <div className={styles.summaryIcon}>
              <ScaleIcon />
            </div>
          </div>
          <div className={styles.summaryRows} style={{ borderTop: "none", marginTop: 8 }}>
            <div className={styles.summaryRow}>
              <span>Total Gastos</span>
              <span className={styles.neg}>$0</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Ingresos</span>
              <span className={styles.pos}>$0</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Balance</span>
              <span className={styles.pos}>$0</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Balance por Campaña</h2>
          <div className={styles.chartPlaceholder}>No hay datos de campañas</div>
        </div>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Gastos por Categoría</h2>
          <div className={styles.chartPlaceholder}>No hay datos de gastos</div>
        </div>
        <div className={`${styles.chartCard} ${styles.chartWide}`}>
          <h2 className={styles.chartTitle}>Evolución del Margen</h2>
          <div className={styles.chartPlaceholder}>No hay datos de margen</div>
        </div>
      </section>

      <section className={styles.actionsGrid}>
        <a href="#" className={`${styles.actionButton} ${styles.actionGreen}`}>
          <div className={styles.actionLabel}>
            <span>Gestionar</span>
            <small>Campañas</small>
          </div>
          <ArrowIcon />
        </a>
        <a href="#" className={`${styles.actionButton} ${styles.actionDark}`}>
          <div className={styles.actionLabel}>
            <span>Registrar</span>
            <small>Gasto</small>
          </div>
          <ArrowIcon />
        </a>
        <a href="#" className={`${styles.actionButton} ${styles.actionTeal}`}>
          <div className={styles.actionLabel}>
            <span>Registrar</span>
            <small>Ingreso</small>
          </div>
          <ArrowIcon />
        </a>
      </section>
    </div>
  );
}
