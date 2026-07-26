import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    icon: "🎨",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Vite"
    ]
  },

  {
    category: "Backend Development",
    icon: "⚡",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST API",
      "Authentication"
    ]
  },

  {
    category: "Tools & Workflow",
    icon: "🛠️",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "npm",
      "Postman"
    ]
  },

  {
    category: "Project Development",
    icon: "🚀",
    items: [
      "CRUD Operations",
      "API Integration",
      "Database Integration",
      "Firebase Authentication",
      "Single Page Applications",
      "Responsive Web Design"
    ]
  },

  {
    category: "Deployment & Hosting",
    icon: "☁️",
    items: [
      "Firebase Hosting",
      "Netlify",
      "Vercel",
      "Environment Variables",
      "Production Deployment"
    ]
  },

  {
    category: "AI & Modern Development",
    icon: "🧠",
    items: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "Rapid Prototyping",
      "Code Review & Refactoring",
      "Modern Development Workflows",
      "Performance Optimization"
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      py-24
      px-6
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-slate-200
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >


          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            "
          >
            Building with Modern Technologies
          </h2>

          <p
            className="
            mt-5
            text-gray-600
            max-w-2xl
            mx-auto
            "
          >
            A collection of technologies, tools and development
            practices I use to create modern, scalable and
            user-focused web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-10
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              group
              bg-white
              dark:bg-gray-900
              border
              border-gray-200
              dark:border-gray-800
              rounded-xl
              p-5
              hover:border-indigo-500
              transition-all
              duration-300
              "
            >
              <div className="text-3xl">
                {skill.icon}
              </div>

              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-gray-900
                "
              >
                {skill.category}
              </h3>

              <div
                className="
                mt-5
                flex
                flex-wrap
                gap-3
                "
              >
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-gray-100
                    text-gray-700
                    text-sm
                    font-medium
                    hover:bg-gray-0
                    transition-all
                    duration-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;