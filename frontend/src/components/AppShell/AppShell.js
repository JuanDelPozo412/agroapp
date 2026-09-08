"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./AppShell.module.css";

const themeOptions = [
  { id: "campo", label: "Campo", color: "#4d7c2f" },
  { id: "tierra", label: "Tierra", color: "#9a6734" },
  { id: "cielo", label: "Cielo", color: "#0f766e" },
  { id: "noche", label: "Noche", color: "#334155" },
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
  const [theme, setTheme] = useState("campo");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("campobalance-theme");

    if (themeOptions.some((option) => option.id === savedTheme)) {
      const frameId = window.requestAnimationFrame(() => {
        setTheme(savedTheme);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  const handleThemeChange = (event) => {
    const nextTheme = event.target.value;

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

        <label className={styles.themePicker}>
          <span>Tema</span>
          <select value={theme} onChange={handleThemeChange}>
            {themeOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.swatches} aria-hidden="true">
            {themeOptions.map((option) => (
              <span
                key={option.id}
                className={theme === option.id ? styles.swatchActive : ""}
                style={{ background: option.color }}
              />
            ))}
          </div>
        </label>

        <div className={styles.seasonBox}>
          <div className={styles.seasonLabel}>Temporada actual</div>
          <div className={styles.seasonValue}>2024/2025</div>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
