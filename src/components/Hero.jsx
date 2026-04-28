import { FaReact } from "react-icons/fa";
import { SiFigma, SiTensorflow } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const roles = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "ML Explorer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  

  

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 pt-24">

        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-green-400 font-mono text-lg mb-2 tracking-widest uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi there, I am
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Md Jaaid
            <br />
            <span className="text-green-400">Kamar</span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-2 justify-center md:justify-start mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-gray-500 text-xl font-mono">&lt;</span>
            <span className="text-green-300 text-xl md:text-2xl font-mono font-semibold min-w-[300px]">
              {displayed}
              <span className="animate-pulse text-green-400">|</span>
            </span>
            <span className="text-gray-500 text-xl font-mono">/&gt;</span>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            B.Tech CSE student at CVR Global University with a CGPA of{" "}
            <span className="text-green-400 font-semibold">8.83</span>. Building
            responsive web apps, exploring ML, and solving{" "}
            <span className="text-green-400 font-semibold">200+ DSA</span>{" "}
            problems on LeetCode.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-300 hover:scale-105 transition-all duration-200 shadow-lg shadow-green-400/25"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-bold rounded-full hover:bg-green-400 hover:text-black hover:scale-105 transition-all duration-200"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="flex gap-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { label: "GitHub", url: "https://github.com/zaidkamar08" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/md-jaaid-kamar-19560a353/" },
              { label: "LeetCode", url: "https://leetcode.com/zaid_kamar08" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 text-sm font-mono tracking-wider uppercase border-b border-transparent hover:border-green-400 pb-1"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative hover:rotate-[1deg] transition-transform duration-300">
            <div className="absolute inset-0 bg-green-400/20 rounded-full blur-[140px] scale-150 animate-pulse" />

            <motion.div className="relative w-auto">
              <Tilt
  tiltMaxAngleX={18}
  tiltMaxAngleY={18}
  scale={1.05}
  glareEnable={true}
  glareMaxOpacity={0.25}
  className="rounded-2xl"
>
  <motion.img
    src={heroImg}
    alt="Jaaid Level Up"
    className="w-80 md:w-[450px] lg:w-[520px] object-contain drop-shadow-[0_40px_100px_rgba(0,255,150,0.35)]"
    
    animate={{ y: [0, -15, 0], rotateZ: [0, 1, -1, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
</Tilt>
            </motion.div>

            


<motion.div
  className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:shadow-[0_0_40px_rgba(0,255,150,0.5)] transition-all duration-300"
  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
  whileHover={{ scale: 1.12, y: -8 }}
>
  <FaReact className="text-cyan-400 text-lg animate-spin-slow" />
  <span className="text-sm font-medium text-white">React</span>
</motion.div>


<motion.div
  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:shadow-[0_0_40px_rgba(0,255,150,0.5)] transition-all duration-300"
  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
  whileHover={{ scale: 1.12, y: -8 }}
>
  <SiFigma className="text-pink-400 text-lg" />
  <span className="text-sm font-medium text-white">UI/UX</span>
</motion.div>


<motion.div
  className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:shadow-[0_0_40px_rgba(0,255,150,0.5)] transition-all duration-300"
  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
  whileHover={{ scale: 1.12, y: -8 }}
>
  <FaBrain className="text-yellow-400 text-lg" />
  <span className="text-sm font-medium text-white">DSA</span>
</motion.div>


<motion.div
  className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:shadow-[0_0_40px_rgba(0,255,150,0.5)] transition-all duration-300"
  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
  whileHover={{ scale: 1.12, y: -8 }}
>
  <SiTensorflow className="text-orange-400 text-lg" />
  <span className="text-sm font-medium text-white">AI/ML</span>
</motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-gray-600 text-xs font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent" />
      </motion.div>
    </section>
  );
}
