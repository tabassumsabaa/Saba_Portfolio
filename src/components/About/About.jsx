import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";
import profile from "../../assets/Image/Photo.jpg";

function About() {
  const stats = [
    { number: "6+", title: "Projects Completed", icon: "🚀" },
    { number: "3", title: "Academic Programs", icon: "🎓" },
    { number: "15+", title: "Technologies Explored", icon: "💻" },
    { number: "∞", title: "Continuous Learning", icon: "📚" },
  ];

  const education = [
    {
      year: "2026 - Present",
      title: "M.Sc Mathematics",
      university: "University of Leipzig, Germany",
      description:
         "Currently pursuing my Master's degree in Mathematics with a focus on analytical thinking, computational approaches, programming, and data-driven problem solving that supports my software development journey."    },
    {
      year: "2025 - 2026",
      title: "Bachelor of Engineering (B.Eng.) Robotics",
      university:
        "Technical University of Applied Sciences Schweinfurt (THWS), Germany",
      description:
        "Studied Robotics and Engineering fundamentals while exploring interdisciplinary applications of technology.",
    },
    {
      year: "2020 - 2023",
      title: "B.Sc Mathematics",
      university: "Aliah University, Government of West Bengal, India",
      description:
        "Built a strong foundation in Mathematics including Numerical Analysis, OOP, Linear Algebra, Differential Equations and Optimization.",
    },
  ];

  return (
    <Reveal>
      <section
        id="about"
        className="
          py-24 px-6
          bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200
          dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
        "
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              About Me 👩‍💻
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Get to know me and my academic journey.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-2 gap-10 mt-16 items-stretch">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                min-h-[700px]
                bg-white/70 dark:bg-white/10
                backdrop-blur-xl
                border border-gray-200 dark:border-white/20
                rounded-3xl p-8 shadow-xl
                flex flex-col items-center justify-center text-center
              "
            >

              <div className="
                p-1 rounded-full
                bg-gradient-to-r from-cyan-500 to-blue-600
              ">
                <img
                  src={profile}
                  alt="Sabiha"
                  className="w-38 h-44 rounded-full object-cover"
                />
              </div>

              <h3 className="
                mt-6 text-3xl font-bold
                text-gray-900 dark:text-white
              ">
                Sabiha Tabassum Saba
              </h3>

              <p className="
                mt-3 text-lg font-semibold
                bg-gradient-to-r from-cyan-500 to-blue-600
                bg-clip-text text-transparent
              ">
                Full Stack MERN Developer
                <span className="text-gray-500 dark:text-gray-400">
                  {" | "}
                </span>
                Modern Development Enthusiast
              </p>

              <p className="
                mt-8 leading-8
                text-gray-700 dark:text-gray-300
              ">
                I'm a Full Stack MERN Developer with a strong academic
                foundation in Mathematics and an enthusiasm for modern web
                development. I enjoy building responsive and user-friendly
                applications that combine clean design with practical
                solutions.
                <br /><br />
                Currently, I'm continuing my academic journey in Germany
                while expanding my expertise in software development,
                problem solving, and AI-assisted workflows.
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {education.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="
                    bg-white/80 dark:bg-white/10
                    backdrop-blur-xl
                    border border-gray-200 dark:border-white/20
                    rounded-3xl p-6 shadow-xl
                  "
                >

                  <span className="
                    inline-flex px-4 py-1 rounded-full
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    text-white font-bold text-sm
                  ">
                    {item.year}
                  </span>

                  <h3 className="
                    mt-4 text-2xl font-bold
                    text-gray-900 dark:text-white
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-2 font-semibold
                    text-cyan-600 dark:text-cyan-400
                  ">
                    {item.university}
                  </p>

                  <p className="
                    mt-4 leading-7
                    text-gray-600 dark:text-gray-300
                  ">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </motion.div>

          </div>


          <div className="
            grid grid-cols-2 md:grid-cols-4
            gap-6 mt-16
          ">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="
                  bg-white/70 dark:bg-white/10
                  backdrop-blur-xl
                  border border-gray-200 dark:border-white/20
                  rounded-3xl p-8 shadow-xl
                "
              >

                <div className="text-4xl">
                  {stat.icon}
                </div>

                <h3 className="mt-4 text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600
                bg-clip-text text-transparent ">
                  {stat.number}
                </h3>

                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {stat.title}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;