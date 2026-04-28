import { motion } from "framer-motion";

const stats = [
  
  { label: "Questions Solved", value: "200+" },
  { label: "Hackathons", value: "4" },
  { label: "Projects", value: "4+" },
  { label: "Domains", value:"3+"},
];

const education = {
  degree: "B.Tech in Computer Science & Engineering",
  university: "C.V. Raman Global University",
  location: "Bhubaneswar, Odisha",
  duration: "Aug 2024 – Present",
  cgpa: "8.83",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Aspiring{" "}
              <span className="text-green-400">Frontend Developer</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I am a Computer Science student passionate about building clean,
              responsive web applications with great user experience. I enjoy
              turning ideas into real products using modern web technologies.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Beyond web development, I explore machine learning, have built
              AI-powered projects, and actively participate in hackathons to
              sharpen my problem-solving skills.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              I have solved over{" "}
              <span className="text-green-400 font-semibold">200+ DSA problems</span>{" "}
              on LeetCode and have a strong foundation in data structures,
              algorithms, and software development principles.
            </p>

            {/* Education card */}
            <div className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-3">
                Education
              </p>
              <h4 className="text-white font-bold text-lg mb-1">
                {education.degree}
              </h4>
              <p className="text-gray-400 text-sm mb-1">
                {education.university} — {education.location}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-gray-500 text-xs font-mono">
                  {education.duration}
                </span>
                <span className="text-green-400 font-mono text-sm font-bold">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 text-center hover:border-green-400/60 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,150,0.25)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-3xl font-extrabold text-green-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-4">
                How I Work
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem Solving Mindset",
                  "Collaborative Development",
                  "Fast Learner",
                  "Consistent",
                  "Adaptable",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-green-400/10 border border-green-400/30 text-green-300 text-sm rounded-full font-mono hover:bg-green-400/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently */}
            <div className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-3">
                Currently
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-green-400">Learning</span> — React, Node.js, Tailwind
                </p>
                <p className="text-gray-400">
                  <span className="text-green-400">Building</span> — Portfolio + Internship Projects
                </p>
                <p className="text-gray-400">
                  <span className="text-green-400">Open to</span> — Internships & Collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}