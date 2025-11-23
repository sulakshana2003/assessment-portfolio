import { useEffect, useMemo, useRef, useState } from "react";

import Chapter1Section from "./pages/chapter/Chapter1.jsx";
import Chapter2Section from "./pages/chapter/Chapter2.jsx";
import Chapter3Section from "./pages/chapter/Chapter3.jsx";
import Chapter4Section from "./pages/chapter/Chapter4.jsx";
import Chapter5Section from "./pages/chapter/Chapter5.jsx";
import Chapter6Section from "./pages/chapter/Chapter6.jsx";
import Chapter7Section from "./pages/chapter/Chapter7.jsx";
import Chapter8Section from "./pages/chapter/Chapter8.jsx";
import Chapter9Section from "./pages/chapter/Chapter9.jsx";
import Chapter10Section from "./pages/chapter/Chapter10.jsx";
import Chapter11Section from "./pages/chapter/Chapter11.jsx";

// -----------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------
export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills" },
      { id: "ch2", title: "Teamwork & Collaboration" },
      { id: "ch3", title: "Communication Skills" },
      { id: "ch4", title: "Leadership & Ethics" },
      { id: "ch5", title: "Problem Solving" },
      { id: "ch6", title: "Project Proposal Writing & Evaluation" },
      { id: "ch7", title: "Emotional Intelligence" },
      { id: "ch8", title: "Interview Preparation" },
      { id: "ch9", title: "CV & Cover Letter" },
      /* { id: "ch10", title: "Dining & Business Etiquette" },
      { id: "ch11", title: "Research Writing" }, */
    ],
    []
  );

  const [active, setActive] = useState("ch1");
  const sectionRefs = useRef({});

  // -----------------------------------------------------
  // SCROLL-SPY OBSERVER (fixed root margins)
  // -----------------------------------------------------
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    chapters.forEach((c) => {
      const el = sectionRefs.current[c.id];
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // -----------------------------------------------------
  // RENDER
  // -----------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-24 grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky" style={{ top: "1.5rem" }}>

            <div className="mb-4 text-sm font-semibold text-gray-600 tracking-wide">
              Assessment Portfolio
            </div>

            <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
              <div
                className="pr-2 sidebar-scroll"
                style={{ maxHeight: "calc(100vh - 9rem)" }}
              >
                <nav className="space-y-3">
                  {chapters.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => scrollTo(c.id)}
                      className="w-full text-left"
                    >
                      <div
                        className={
                          "flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-200 " +
                          (active === c.id
                            ? "border-green-500 bg-green-50 shadow-md"
                            : "border-green-200 bg-white hover:border-green-300")
                        }
                      >
                        <span
                          className={
                            "text-sm font-semibold transition-all duration-200 " +
                            (active === c.id ? "text-gray-900" : "text-gray-600")
                          }
                        >
                          Chapter
                        </span>

                        <span
                          className={
                            "h-8 w-8 grid place-items-center rounded-full border text-sm font-bold transition-all duration-200 " +
                            (active === c.id
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-white text-gray-700 border-green-300")
                          }
                        >
                          {idx + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* ---------------- CONTENT ---------------- */}
        <section className="md:col-span-9">

          {chapters.map((c) => {
            const setRef = (el) => (sectionRefs.current[c.id] = el);

            return (
              <div
                key={c.id}
                id={c.id}
                ref={setRef}
                className="scroll-mt-32 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-6"
              >
                {/* Invisible ANCHOR FIX */}
                <span className="block h-1 w-full"></span>

                {/* Load appropriate chapter UI */}
                {c.id === "ch1" && <Chapter1Section />}
                {c.id === "ch2" && <Chapter2Section />}
                {c.id === "ch3" && <Chapter3Section />}
                {c.id === "ch4" && <Chapter4Section />}
                {c.id === "ch5" && <Chapter5Section />}
                {c.id === "ch6" && <Chapter6Section />}
                {c.id === "ch7" && <Chapter7Section />}
                {c.id === "ch8" && <Chapter8Section />}
                {c.id === "ch9" && <Chapter9Section />}
                {/* {c.id === "ch10" && <Chapter10Section />}
                {c.id === "ch11" && <Chapter11Section />} */}
              </div>
            );
          })}

        </section>
      </main>
    </div>
  );
}
