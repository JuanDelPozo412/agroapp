"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./AppShell.module.css";

const themeOptions = [
  {
    id: "blancoNegro",
    label: "Blanco y negro",
    color: "#303030",
    colors: ["#0f0f0f", "#303030", "#85878a", "#d8d8d8", "#f7f7f7"],
  },
  {
    id: "earthyElegance",
    label: "Earthy Elegance",
    color: "#34302c",
    colors: ["#12100f", "#34302c", "#85878a", "#d7c3ad", "#f4f4f4"],
  },
  {
    id: "greenSerenity",
    label: "Green Serenity",
    color: "#3f6244",
    colors: ["#a8cfaa", "#8fba98", "#739b78", "#3f6244", "#0e2113"],
  },
  {
    id: "prettyPink",
    label: "Pretty in Pink",
    color: "#d86299",
    colors: ["#d86299", "#e978ae", "#e9b8b2", "#b5bea2", "#719d8c"],
  },
];

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "grid" },
  { label: "Campañas", href: "/campanas", icon: "leaf" },
  { label: "Lotes", href: "/lotes", icon: "pin" },
  { label: "Gastos", href: "/gastos", icon: "down" },
  { label: "Ingresos", href: "/ingresos", icon: "up" },
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

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("greenSerenity");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("campobalance-theme");

    if (themeOptions.some((option) => option.id === savedTheme)) {
      const frameId = window.requestAnimationFrame(() => {
        setTheme(savedTheme);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  const handleThemeChange = (nextTheme) => {
    setTheme(nextTheme);
    window.localStorage.setItem("campobalance-theme", nextTheme);
  };

  return (
    <div className={`${styles.shell} ${styles[`theme${theme}`]}`}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <NavIcon name="leaf" />
          </div>
          <div>
            <div className={styles.brandName}>AgroApp</div>
            <div className={styles.brandSub}>Gestión Agrícola</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navItem} ${
                pathname === item.href ? styles.navItemActive : ""
              }`}
            >
              <span className={styles.navIcon}>
                <NavIcon name={item.icon} />
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <section className={styles.themePicker} aria-label="Elegir tema">
          <span>Tema</span>

          <div className={styles.paletteList}>
            {themeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`${styles.paletteButton} ${
                  theme === option.id ? styles.paletteButtonActive : ""
                }`}
                onClick={() => handleThemeChange(option.id)}
                aria-pressed={theme === option.id}
                aria-label={`Tema ${option.label}`}
              >
                <span
                  className={styles.paletteDot}
                  style={{ background: option.color }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </section>

        <div className={styles.seasonBox}>
          <div className={styles.seasonLabel}>Temporada actual</div>
          <div className={styles.seasonValue}>2024/2025</div>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
