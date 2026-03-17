import { useEffect, useState } from "react";
import { Ic, SESSEmblem } from "./SharedUI";
import logo from "../assets/sess_logo_png_color.png";
// import favlogo from "../assets/sess-logo.png"

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Products", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const THEME_KEY = "sess-theme";

const THEME_TOKENS = {
  dark: {
    "--bg": "#0a0f1e",
    "--surf": "#151e2f",
    "--txt": "#ffffff",
    "--txt-dim": "#94a3b8",
    "--border": "rgba(34, 229, 245, 0.15)",
    "--border2": "rgba(34, 229, 245, 0.4)",
    "--pink": "#ff4d8f",
    "--blue": "#6b8aff",
    "--cyan": "#5ef0ff",
    "--gradient": "linear-gradient(135deg, #5ef0ff, #6b8aff, #ff4d8f, #ffb86b)",
  },
  light: {
    "--bg": "#ffffff",
    "--surf": "#f8faff",
    "--txt": "#0a0f1e",
    "--txt-dim": "#4a5568",
    "--border": "rgba(59, 91, 255, 0.12)",
    "--border2": "rgba(59, 91, 255, 0.3)",
    "--pink": "#e8006a",
    "--blue": "#3b5bff",
    "--cyan": "#22e5f5",
    "--gradient": "linear-gradient(135deg, #22e5f5, #3b5bff, #e8006a, #f5a623)",
  },
};

const SUN_ICON = [
  "M12 2v2",
  "M12 20v2",
  "M4.93 4.93l1.41 1.41",
  "M17.66 17.66l1.41 1.41",
  "M2 12h2",
  "M20 12h2",
  "M4.93 19.07l1.41-1.41",
  "M17.66 6.34l1.41-1.41",
  "M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8",
];

const MOON_ICON = "M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isLight = theme === "light";
    const themeTokens = THEME_TOKENS[theme];

    Object.entries(themeTokens).forEach(([token, value]) => {
      document.documentElement.style.setProperty(token, value);
    });

    document.documentElement.classList.toggle("light-mode", isLight);
    document.body.classList.toggle("light-mode", isLight);
    document.documentElement.style.colorScheme = theme;
    document.body.style.backgroundColor = "var(--bg)";
    document.body.style.color = "var(--txt)";
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "var(--surf)",
        borderColor: "var(--border)",
        boxShadow: "0 18px 48px rgba(10, 15, 30, 0.08)",
      }}
    >
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(90deg, var(--cyan) 0%, var(--blue) 50%, var(--pink) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-18 min-h-[72px] flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 min-w-0">
            <div className="w-15 h-15" style={{width: "200px", height: "50px"}}>
              <img src={logo} alt="" />
            </div>
            

            {/* <div className="min-w-0">
              <p
                className="font-syne text-sm sm:text-base font-bold leading-none truncate"
                style={{ color: "var(--txt)" }}
              >
                SESS
              </p>
              <p
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] truncate mt-1"
                style={{ color: "var(--pink)" }}
              >
                Scientific Solutions
              </p>
            </div> */}
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
                  style={{
                    color: "var(--txt-dim)",
                    borderColor: "transparent",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--txt)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.color = "var(--txt-dim)";
                  }}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-transform duration-200"
                style={{
                  color: "#fff",
                  background: "linear-gradient(90deg,var(--pink),var(--blue))",
                  boxShadow: "0 10px 30px rgba(59,91,255,0.22)",
                }}
              >
                <Ic d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" size={15} />
                Enquire
              </a>
            </nav>

            <button
              type="button"
              className="h-11 px-3 sm:px-4 rounded-xl border inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200"
              style={{
                color: "var(--txt-dim)",
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
              onClick={toggleTheme}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.color = "var(--txt)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--txt-dim)";
              }}
              aria-label={themeLabel}
              title={themeLabel}
            >
              <Ic d={theme === "dark" ? SUN_ICON : MOON_ICON} size={17} />
              <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            <button
              type="button"
              className="md:hidden w-11 h-11 rounded-xl border flex items-center justify-center transition-colors duration-200"
              style={{
                color: "var(--txt)",
                borderColor: "var(--border)",
                background: "var(--bg)",
              }}
              onClick={() => setMobileOpen((prev) => !prev)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <Ic
                d={
                  mobileOpen
                    ? ["M18 6L6 18", "M6 6l12 12"]
                    : ["M4 7h16", "M4 12h16", "M4 17h16"]
                }
                size={18}
              />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden pb-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <nav className="flex flex-col gap-2 pt-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    color: "var(--txt-dim)",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#"
                className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                style={{
                  color: "#fff",
                  background: "linear-gradient(90deg,var(--pink),var(--blue))",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <Ic d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" size={15} />
                Enquire
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
