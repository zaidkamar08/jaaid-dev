import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub, FaUnity,
} from "react-icons/fa";
import {
  SiReact, SiTailwindcss, SiCplusplus, SiMysql,
  SiScikitlearn, SiPandas, SiNumpy, SiStreamlit,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400 text-2xl " /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-2xl " /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl " /> },
      { name: "React", icon: <SiReact className="text-cyan-400 text-2xl " /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-2xl " /> },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-300 text-2xl  " /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500 text-2xl " /> },
      { name: "SQL", icon: <SiMysql className="text-orange-300 text-2xl " /> },
    ],
  },
  {
    category: "ML / Data Science",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400 text-2xl " /> },
      { name: "Pandas", icon: <SiPandas className="text-purple-400 text-2xl " /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400 text-2xl " /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-red-400 text-2xl " /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl " /> },
      { name: "GitHub", icon: <FaGithub className="text-white text-2xl " /> },
      { name: "Unity", icon: <FaUnity className="text-gray-300 text-2xl " /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gray-950 overflow-hidden">

      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
            >
              <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-6">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-green-400/50 hover:bg-gray-700  rounded-xl px-4 py-2.5 cursor-default hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,150,0.25)] transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill.icon}
                    <span className="text-gray-300 text-sm font-mono">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}