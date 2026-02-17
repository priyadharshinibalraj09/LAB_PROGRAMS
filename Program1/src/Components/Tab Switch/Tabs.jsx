import { useEffect, useRef, useState } from "react";

export default function Tabs() {
  const TABS = [
    {
      id: "home",
      title: "Home",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden>
          <path d="M3 11.5L12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Welcome back!</h3>
          <p className="mt-2 text-slate-600">This is the home panel — concise summary, quick stats, or a welcoming message can go here.</p>
          <div className="mt-4 flex gap-3">
            <div className="px-3 py-2 bg-slate-50 rounded-lg text-sm">Users: <strong>1.2k</strong></div>
            <div className="px-3 py-2 bg-slate-50 rounded-lg text-sm">Active: <strong>98%</strong></div>
          </div>
        </div>
      )
    },
    {
      id: "about",
      title: "About",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden>
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8v.01M11 12h1v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-800">About this demo</h3>
          <p className="mt-2 text-slate-600">Clean, accessible tabs built with Tailwind — keyboard friendly, animated, and production-ready.</p>
          <p className="mt-3 text-sm text-slate-500">Built with focus on usability and performance.</p>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden>
          <path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="8" width="18" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 12l3 2 5-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      content: (
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Get in touch</h3>
          <p className="mt-2 text-slate-600">Questions? Feedback? Reach out and we’ll respond within one business day.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm shadow">Send email</a>
            <span className="text-sm text-slate-400">or call <strong>+1 (555) 123-456</strong></span>
          </div>
        </div>
      )
    }
  ];

  function classNames(...c) {
    return c.filter(Boolean).join(" ");
  }

  const [activeTab, setActiveTab] = useState("home");
  const btnRefs = useRef([]);

  useEffect(() => {
    btnRefs.current = btnRefs.current.slice(0, TABS.length);
  }, []);

  function onKeyDown(e) {
    const idx = TABS.findIndex((t) => t.id === activeTab);

    if (e.key === "ArrowRight") {
      const next = TABS[(idx + 1) % TABS.length];
      setActiveTab(next.id);
      btnRefs.current[(idx + 1) % TABS.length]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = TABS[(idx - 1 + TABS.length) % TABS.length];
      setActiveTab(prev.id);
      btnRefs.current[(idx - 1 + TABS.length) % TABS.length]?.focus();
    } else if (e.key === "Home") {
      setActiveTab(TABS[0].id);
      btnRefs.current[0]?.focus();
    } else if (e.key === "End") {
      setActiveTab(TABS[TABS.length - 1].id);
      btnRefs.current[TABS.length - 1]?.focus();
    }
  }

  const active = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-white p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-800">Interactive Tabs</h2>
          <span className="text-sm text-slate-400">Accessible · Responsive · Animated</span>
        </header>

        <div className="flex flex-col items-center">
          <div
            role="tablist"
            aria-label="Main tabs"
            onKeyDown={onKeyDown}
            className="bg-slate-50 p-1 rounded-full flex gap-2 w-full max-w-md"
          >
            {TABS.map((tab, i) => {
              const selected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (btnRefs.current[i] = el)}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={classNames(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-transform duration-200",
                    selected
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                      : "text-slate-600 hover:bg-white/70"
                  )}
                >
                  <span className="w-4 h-4 opacity-90">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 w-full">
            <div
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300"
              key={active.id}
            >
              {active.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}