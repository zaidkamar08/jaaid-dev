import { motion } from "framer-motion";

const hackathons = [
  {
    number: "01",
    name: "CIA Hackathon",
    fullName: "Code Innovate Accelerate Hackathon",
    org: "C.V. Raman Global University",
    date: "March 2025",
    achievement: "Certificate of Appreciation",
    achievementType: "award",
    project: "ResQNow",
    role: "Frontend Developer",
    description:
      "Built the frontend of 'ResQNow' — an emergency response platform for accident detection in low-network rural areas. A SIM-based alert system automatically sends the victim's location and emergency message to the nearest registered hospitals and ambulances when an accident occurs.",
    tags: ["HTML", "CSS", "JavaScript", "Emergency Tech"],
  },
  {
    number: "02",
    name: "Smart India Hackathon",
    fullName: "Smart India Hackathon 2025",
    org: "C.V. Raman Global University",
    date: "September 2025",
    achievement: "Reached Internal Round",
    achievementType: "round",
    project: "Gau-Gyaan",
    role: "Frontend Developer + AI Integration",
    description:
      "Developed 'Gau-Gyaan', an AI-powered web app that identifies cattle breeds from photos. Farmers can upload an image to instantly get breed information, helping them understand dietary needs and health care for their livestock.",
    tags: ["React", "AI/ML", "Python", "AgriTech"],
  },
  {
    number: "03",
    name: "AI + IoT Hackathon",
    fullName: "AI + IoT Hackathon 2026",
    org: "Trident Academy of Technology",
    date: "January 2026",
    achievement: "Participated",
    achievementType: "participated",
    project: "ClassSight",
    role: "Frontend Developer + AI Integration",
    description:
      "Presented ClassSight — a smart classroom monitoring system using laptop camera and AI to track student engagement in real time. Teachers can view a heatmap dashboard showing which students are confused or fatigued and adapt their teaching accordingly.",
    tags: ["React", "AI", "IoT", "Python", "Dashboard"],
  },
  {
    number: "04",
    name: "Urvion Green Ideathon",
    fullName: "Urvion Green Ideathon 2026",
    org: "Silicon University",
    date: "January 2026",
    achievement: "Participated",
    achievementType: "participated",
    project: "JAL-SETU",
    role: "Team Contributor",
    description:
      "Pitched 'JAL-SETU' — a self-sustaining floating interceptor for river plastic and oil pollution. Uses solar-powered HDPE floating modules placed diagonally to guide waste to one bank, where an inclined conveyor belt collects it automatically. Fish-safe, flood-safe, and scalable.",
    tags: ["IoT Concept", "Solar Energy", "Environment", "Green Tech"],
  },
];

const achievementColors = {
  award: "bg-yellow-400/10 border-yellow-400/40 text-yellow-400",
  round: "bg-blue-400/10 border-blue-400/40 text-blue-400",
  participated: "bg-green-400/10 border-green-400/40 text-green-400",
};

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24 bg-gray-950 overflow-hidden">

      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Competitive experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Hackathons <span className="text-green-400">& Events</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((item, index) => (
            <motion.div
              key={item.number}
              className="bg-gray-900 border border-green-400/20 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,150,0.08)]flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              
            >
              {/* Top row — number + achievement badge */}
              <div className="flex items-center justify-between">
                <span className="text-green-400/40 font-mono text-4xl font-extrabold">
                  {item.number}
                </span>
                <span
                  className={
                    "px-3 py-1 border rounded-full text-xs font-mono font-bold " +
                    achievementColors[item.achievementType]
                  }
                >
                  {item.achievement}
                </span>
              </div>

              {/* Event name */}
              <div>
                <p className="text-green-400 font-mono text-xs uppercase tracking-widest mb-1">
                  {item.date} — {item.org}
                </p>
                <h3 className="text-xl font-extrabold text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-xs font-mono mt-0.5">
                  {item.fullName}
                </p>
              </div>

              {/* Project + Role */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-800 rounded-xl px-4 py-2">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-mono mb-0.5">
                    Project
                  </p>
                  <p className="text-green-300 text-sm font-mono font-semibold">
                    {item.project}
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl px-4 py-2">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-mono mb-0.5">
                    My Role
                  </p>
                  <p className="text-green-300 text-sm font-mono font-semibold">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-400/10 border border-green-400/20 text-green-300 text-xs rounded-full font-mono hover:border-green-400/50 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
