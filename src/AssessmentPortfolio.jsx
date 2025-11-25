import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= Chapter Pages ================= */
import Chapter1Section from "./pages/chapter/Chapter1.jsx";
import Chapter2Section from "./pages/chapter/Chapter2.jsx";
import Chapter3Section from "./pages/chapter/Chapter3.jsx";
import Chapter4Section from "./pages/chapter/Chapter4.jsx";
import Chapter5Section from "./pages/chapter/Chapter5.jsx";
import Chapter6Section from "./pages/chapter/Chapter6.jsx";
import Chapter7Section from "./pages/chapter/Chapter7.jsx";
import Chapter8Section from "./pages/chapter/Chapter8.jsx";
import Chapter9Section from "./pages/chapter/Chapter9.jsx";

/* ================= Icon Set (Minimal Modern) ================= */
const Icons = ["📎", "📝", "💼", "📂", "🎙️", "🧾", "🍲", "💡", "🍽"];

export default function AssessmentPortfolio() {
  /* ================= CHAPTER DATA ================= */
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills" },
      { id: "ch2", title: "CV & Cover Letter Writing" },
      { id: "ch3", title: "Job Hunting & Interview Skills" },
      { id: "ch4", title: "Portfolio Management" },
      { id: "ch5", title: "Meetings & Speaking Skills" },
      { id: "ch6", title: "Project Proposal Writing & Evaluation" },
      { id: "ch7", title: "Food Festival – Ralahami Kadé" },
      { id: "ch8", title: "Emotional Intelligence" },
      { id: "ch9", title: "Dining Etiquette & Table Manners" },
    ],
    []
  );

  /* ================= STATE + REFS ================= */
  const [active, setActive] = useState("ch1");
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [modalImg, setModalImg] = useState(null);
  const sectionRefs = useRef({});

  /* ================= DARK MODE ================= */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -55% 0px" }
    );
    chapters.forEach((c) => sectionRefs.current[c.id] && obs.observe(sectionRefs.current[c.id]));
    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) => {
    clickSound();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ================= IMAGE MODAL ================= */
  const openModal = (src) => setModalImg(src);
  const closeModal = () => setModalImg(null);

  /* ================= CLICK SOUND ================= */
  const clickSound = () => new Audio("/click.mp3").play();

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
      className={`min-h-screen ${dark ? "bg-[#111] text-gray-100" : "bg-white text-gray-900"}`}
    >
      {/* ================= TOP HEADER ================= */}
      <header
        className={`sticky top-0 z-50 py-4 shadow backdrop-blur-xl border-b flex justify-center items-center
        ${dark ? "bg-black/60 border-gray-800" : "bg-white/70 border-gray-200"}`}
      >
        <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-widest">
          Assessment Portfolio
        </h1>

        <button
          onClick={() => {
            setDark(!dark);
            clickSound();
          }}
          className="absolute right-6 top-3 p-2 px-3 text-lg rounded-full border transition-all hover:scale-110 active:scale-90
           bg-transparent border-gray-400 dark:border-gray-300"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      {/* ================= LAYOUT ================= */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-6 pt-6 pb-32">
        {/* ================= SIDEBAR ================= */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-28 space-y-4 w-[270px]">
            <div
              className={`${
                dark ? "bg-black/40 border-gray-700" : "bg-white/40 border-gray-300"
              } backdrop-blur-xl shadow-lg rounded-2xl p-4 border`}
            >
              <nav className="space-y-3 overflow-y-auto" style={{ maxHeight: "calc(100vh - 6rem)" }}>
                {chapters.map((c, i) => (
                  <motion.button
                    key={c.id}
                    onClick={() => scrollTo(c.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full group text-left"
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-2 rounded-xl shadow-sm select-none transition-all
                      ${
                        active === c.id
                          ? dark
                            ? "bg-white text-black animate-pulse"
                            : "bg-black text-white animate-pulse"
                          : dark
                          ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      <span className="text-lg">{Icons[i]}</span>
                      <span className="text-sm font-medium whitespace-normal leading-snug">
                        {c.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <section className="md:col-span-9">
          {chapters.map((c) => (
            <motion.div
              key={c.id}
              id={c.id}
              ref={(el) => (sectionRefs.current[c.id] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`scroll-mt-40 p-6 md:p-10 mb-20 rounded-3xl shadow-xl border ${
                dark ? "bg-black/40 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              {c.id === "ch1" && <Chapter1Section openModal={openModal} />}
              {c.id === "ch2" && <Chapter2Section openModal={openModal} />}
              {c.id === "ch3" && <Chapter3Section openModal={openModal} />}
              {c.id === "ch4" && <Chapter4Section openModal={openModal} />}
              {c.id === "ch5" && <Chapter5Section openModal={openModal} />}
              {c.id === "ch6" && <Chapter6Section openModal={openModal} />}
              {c.id === "ch7" && <Chapter7Section openModal={openModal} />}
              {c.id === "ch8" && <Chapter8Section openModal={openModal} />}
              {c.id === "ch9" && <Chapter9Section openModal={openModal} />}
            </motion.div>
          ))}
        </section>
      </main>

      {/* ================= IMAGE MODAL ================= */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[70] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <img src={modalImg} alt="" className="max-h-[80vh] max-w-[80vw] rounded-lg shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
