import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================== Imported Portfolio Images ================== */
import img1 from "./assets/ch1/ps-intoduction.jpg";
import img2 from "./assets/ch1/bilieves.jpg";
import img3 from "./assets/ch3/interview_basics.jpg";
import img4 from "./assets/ch2/CV_Cover_Letter_Writing.jpg";
import img5 from "./assets/ch3/job.jpg";
import img6 from "./assets/ch3/Mock_interview.jpg";
import img7 from "./assets/ch5/meetings.jpg";
import img8 from "./assets/ch6/Activity_plan.jpg";
import img9 from "./assets/F2.jpeg";
import img10 from "./assets/F5.jpeg";
import img11 from "./assets/ch8/emotional_intelligence.jpg";
import img12 from "./assets/ch9/napkin.jpg";

export default function LandingPage() {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  const chapters = [
    "Introduction to Professional Skills",
    "CV & Cover Letter Writing",
    "Job Hunting & Interview Skills",
    "Portfolio Management",
    "Meetings & Speaking Skills",
    "Project Proposal Writing & Evaluation",
    "Food Festival — Ralahami Kadé",
    "Emotional Intelligence",
    "Dining Etiquette & Table Manners"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ======================= MINIMAL HERO SECTION ======================= */}
      <section className="h-[80vh] flex flex-col justify-center items-end pr-6 sm:pr-16 md:pr-32 bg-white relative">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          {/* Small Identity Block */}
          <div className="text-sm text-gray-600 font-medium mb-3">
            <p className="font-semibold text-gray-800">Sulakshana Kalugamage</p>
            <p className="text-gray-500">Sa24610048</p>
            <p className="text-gray-500">Sliit City Uni</p>
            <p className="text-gray-500">{new Date().getFullYear()}</p>
          </div>

          {/* Big Bold Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[58px] sm:text-[90px] md:text-[120px] font-extrabold leading-[0.85] tracking-tight text-black"
          >
            ASSESSMENT<br />PORTFOLIO
          </motion.h1>
        </motion.div>

        {/* Minimal Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex gap-4"
        >
          <Link to="/portfolio">
            <button className="px-6 py-2 text-white bg-black font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all">
              View Portfolio
            </button>
          </Link>

          <a href="#chapters">
            <button className="px-6 py-2 bg-white text-black border border-black font-semibold rounded-lg shadow hover:bg-gray-100 transition-all">
              Explore Chapters
            </button>
          </a>
        </motion.div>
      </section>

      {/* ======================= PORTFOLIO HIGHLIGHTS GALLERY ======================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Portfolio Highlights</h2>

        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-gray-200 cursor-pointer"
            >
              <img
                src={img}
                alt="Portfolio work"
                className="w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================= CHAPTER FEATURE CARDS ======================= */}
      <section id="chapters" className="max-w-6xl mx-auto px-6 pb-28 mt-10">
        <h2 className="text-3xl font-bold text-gray-900 text-left">Explore All Chapters</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
          {chapters.map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/90 backdrop-blur-md border border-gray-300 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="h-10 w-10 rounded-full bg-black text-white font-bold grid place-items-center text-sm mb-3 shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p className="font-medium">
          Designed by <span className="font-bold">Sulakshana Kalugamage</span> — © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
