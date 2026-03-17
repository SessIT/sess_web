import { useEffect, useState } from "react";
import { Ic, SESSEmblem, SectionCard } from "./SharedUI";

const QUICK_LINKS = ["Home", "About", "Products", "Services", "Contact"];

const CONTACT_ITEMS = [
  {
    label: "Address",
    value: "Door No 2/298, ANE Garden, Perumal Kovil Street, Chennai - 600122",
    icon: "M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10zm0-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  },
  {
    label: "Email",
    value: "easwari.kjsb@gmail.com",
    icon: "M4 6h16v12H4z M22 6l-10 7L2 6",
  },
  {
    label: "Phone",
    value: "+91 94444 27748",
    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z",
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 240);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer
        className="border-t"
        style={{
          background: "linear-gradient(180deg, var(--surf) 0%, var(--bg) 100%)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
            <SectionCard>
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <SESSEmblem size={34} />
                </div>

                <div>
                  <h3
                    className="font-syne text-xl font-bold"
                    style={{ color: "var(--txt)" }}
                  >
                    Sri Easwari Scientific Solution
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7"
                    style={{ color: "var(--txt-dim)" }}
                  >
                    Precision-driven environmental and scientific solutions with a
                    clean, modern interface powered by your shared UI system.
                  </p>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <h4
                className="font-syne text-base font-bold mb-4"
                style={{ color: "var(--txt)" }}
              >
                Quick Links
              </h4>

              <div className="grid gap-2">
                {QUICK_LINKS.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm border transition-colors duration-200"
                    style={{
                      color: "var(--txt-dim)",
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border2)";
                      e.currentTarget.style.color = "var(--txt)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--txt-dim)";
                    }}
                  >
                    <Ic d="M9 18l6-6-6-6" size={14} />
                    {item}
                  </a>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <h4
                className="font-syne text-base font-bold mb-4"
                style={{ color: "var(--txt)" }}
              >
                Contact
              </h4>

              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--cyan)",
                      }}
                    >
                      <Ic d={item.icon} size={16} />
                    </div>

                    <div>
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.16em] mb-1"
                        style={{ color: "var(--pink)" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm leading-6" style={{ color: "var(--txt-dim)" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div
            className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid var(--border)", color: "var(--txt-dim)" }}
          >
            <p>Copyright {year} SESS. All rights reserved.</p>
            <p style={{ color: "var(--pink)" }}>Built with Shared UI design tokens</p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-5 bottom-5 w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{
          color: "#fff",
          borderColor: "var(--border)",
          background: "linear-gradient(180deg,var(--blue),var(--pink))",
          boxShadow: "0 16px 32px rgba(0,0,0,0.28)",
        }}
        aria-label="Scroll to top"
      >
        <Ic d="M12 19V5M5 12l7-7 7 7" size={18} />
      </button>
    </>
  );
}
