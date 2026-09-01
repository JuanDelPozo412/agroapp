import styles from "./layout.module.css";

const navItems = [
  { label: "Dashboard", active: true, icon: "grid" },
  { label: "Campañas", icon: "leaf" },
  { label: "Lotes", icon: "pin" },
  { label: "Gastos", icon: "down" },
  { label: "Ingresos", icon: "up" },
];

function NavIcon({ name }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7 7 7 0 0 1-7 7Z" />
          <path d="M11 20v-9" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "down":
      return (
        <svg {...props}>
          <polyline points="3 7 10 14 14 10 21 17" />
          <polyline points="21 10 21 17 14 17" />
        </svg>
      );
    case "up":
      return (
        <svg {...props}>
          <polyline points="3 17 10 10 14 14 21 7" />
          <polyline points="14 7 21 7 21 14" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <NavIcon name="leaf" />
          </div>
          <div>
            <div className={styles.brandName}>CampoBalance</div>
            <div className={styles.brandSub}>Gestión Agrícola</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`${styles.navItem} ${
                item.active ? styles.navItemActive : ""
              }`}
            >
              <span className={styles.navIcon}>
                <NavIcon name={item.icon} />
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.seasonBox}>
          <div className={styles.seasonLabel}>Temporada actual</div>
          <div className={styles.seasonValue}>2024/2025</div>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
