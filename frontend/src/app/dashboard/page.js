import styles from "./page.module.css";

const stats = [
  { label: "Cosecha total", value: "-- t" },
  { label: "Ingresos", value: "$ --" },
  { label: "Gastos", value: "$ --" },
  { label: "Margen", value: "$ --" },
];

const charts = [
  { title: "Cosecha por lote" },
  { title: "Ingresos vs gastos" },
  { title: "Evolución del margen", wide: true },
];

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Resumen de campo</p>
        </div>
      </header>

      <section className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </section>

      <section className={styles.chartsGrid}>
        {charts.map((chart) => (
          <div
            key={chart.title}
            className={`${styles.chartCard} ${chart.wide ? styles.wide : ""}`}
          >
            <div className={styles.chartHeader}>
              <h2 className={styles.chartTitle}>{chart.title}</h2>
            </div>
            <div className={styles.chartPlaceholder}>Gráfico próximamente</div>
          </div>
        ))}
      </section>
    </div>
  );
}
