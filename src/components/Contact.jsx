import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contacts = [
  {
    label: "Email",
    value: "zaidkamar08@gmail.com",
    href: "mailto:zaidkamar08@gmail.com",
    icon: <FiMail size={24} />,
    description: "Drop me a mail anytime",
  },
  {
    label: "LinkedIn",
    value: "md-jaaid-kamar",
    href: "https://www.linkedin.com/in/md-jaaid-kamar-19560a353/",
    icon: <FiLinkedin size={24} />,
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    value: "zaidkamar08",
    href: "https://github.com/zaidkamar08",
    icon: <FiGithub size={24} />,
    description: "Check out my code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gray-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact <span className="text-green-400">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-green-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto text-lg leading-relaxed">
            I am open to internships, collaborations, and new opportunities.
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-gray-900 border border-green-400/20 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-400/10 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              {/* Label */}
              <div>
                <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-white font-bold text-sm mb-1">
                  {item.value}
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-green-400/40 group-hover:text-green-400 transition-colors duration-300 font-mono text-sm">
                Visit →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="border-t border-green-400/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 font-mono text-sm">
            Designed & Built by{" "}
            <span className="text-green-400 font-bold">Md Jaaid Kamar</span>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-mono text-xs">
              <span className="text-green-400">Jaaid</span>.dev
            </span>
            <span className="text-gray-700 font-mono text-xs">— 2026</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/zaidkamar08"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-green-400 transition-colors duration-200"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-jaaid-kamar-19560a353/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-green-400 transition-colors duration-200"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:zaidkamar08@gmail.com"
              className="text-gray-600 hover:text-green-400 transition-colors duration-200"
            >
              <FiMail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
