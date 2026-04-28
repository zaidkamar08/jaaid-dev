import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import tendersort from "../assets/tendersort.png";
import carprice from "../assets/carprice.png";
import agrisetu from "../assets/agrisetu.png";
import classsight from "../assets/classsight.png";
import snapbooth from "../assets/snapbooth.png";

const projects = [
  {
    title: "TenderSort",
    description:
      "AI-powered government tender evaluation platform that extracts eligibility criteria, parses bidder submissions, and delivers explainable verdicts in minutes. Built for Hackathon 2026 — CRPF Theme 3.",
    tags: ["AI", "LLM", "OCR", "React", "Dashboard"],
    image: tendersort,
    live: "https://tendorsort.netlify.app/",
    github: "https://github.com/zaidkamar08/tendorsort",
  },
  {
    title: "Car Price Predictor",
    description:
      "ML regression model that predicts car prices based on brand, fuel type, transmission, and specifications. Built with Gradient Boosting achieving 0.921 accuracy score.",
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    image: carprice,
    live: "https://car-price-predictor-cl9kwcrxtnvzvkhsnxq6ev.streamlit.app/",
    github: "https://github.com/zaidkamar08/Car-Price-Predictor",
  },
  {
    title: "AgriSetu",
    description:
      "Agricultural equipment rental platform enabling farmers to rent equipment from owners for cost-effective resource sharing. Features real-time weather, chat with farmers, and equipment listings.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: agrisetu,
    live: "https://agrisetu2025.netlify.app/",
    github: "https://github.com/zaidkamar08/agrisetu",
  },
  {
    title: "ClassSight",
    description:
      "Smart classroom AI dashboard that monitors student engagement and movement using camera input. Detects confusion and stress levels in real time with a heatmap view for teachers.",
    tags: ["AI", "IoT", "Python", "Dashboard", "ML"],
    image: classsight,
    live: "https://classightt.netlify.app/",
    github: "https://github.com/zaidkamar08/classSight",
  },
  {
    title: "SnapBooth",
    description:
      "Browser-based photobooth web app that captures images using browser camera APIs and generates vertical photo strips automatically with multiple filter options.",
    tags: ["HTML", "CSS", "JavaScript", "Camera API"],
    image: snapbooth,
    live: "https://snapstripz.netlify.app/",
    github: "https://github.com/zaidkamar08/WebPhotobooth",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gray-950 overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">
            What I have built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-green-400">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="mb-8 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gray-900 border border-green-400/30 rounded-2xl overflow-hidden hover:border-green-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10">
            <div className="grid md:grid-cols-2">
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50" />
                <div className="absolute top-4 left-4 bg-green-400 text-black text-xs font-mono font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-2">
                  Project 01
                </p>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-400/10 border border-green-400/30 text-green-300 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-green-400 text-black font-semibold text-sm rounded-full hover:bg-green-300 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2 border border-green-400 text-green-400 font-semibold text-sm rounded-full  hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,150,0.25)]"
                  >
                    <FiGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-gray-900 border border-green-400/20 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,150,0.25)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-1">
                  Project 0{index + 2}
                </p>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-400/10 border border-green-400/20 text-green-300 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2 bg-green-400 text-black font-semibold text-xs rounded-full hover:bg-green-300 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                  >
                    <FiExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                   className="flex items-center gap-1.5 px-5 py-2 border border-green-400 text-green-400 font-semibold text-xs rounded-full  hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,150,0.25)]"
                  >
                    <FiGithub size={12} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
