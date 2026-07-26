import { motion } from "framer-motion";
import Photo from "../../assets/Profile/hero_Img2.png";
import Reveal from "../Reveal/Reveal";


const Hero = () => {
  return (
    <Reveal>
      <section
        id="home"
        className="
        relative overflow-hidden min-h-[90vh] flex items-center
        pt-28 pb-12
        bg-gradient-to-br
        from-sky-50 via-white to-cyan-50
        dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
        transition-colors duration-500
        "
      >
        {/* Background Glow */}
        <div
          className="
          absolute top-20 left-10
          w-72 h-72
          bg-cyan-400/20
          rounded-full blur-3xl
          animate-pulse
        "
        ></div>

        <div
          className="
          absolute bottom-10 right-10
          w-72 h-72
          bg-blue-500/20
          rounded-full blur-3xl
          animate-pulse
        "
        ></div>

        {/* Content */}
        <div
          className="
          relative z-10
          max-w-7xl mx-auto px-6
          grid md:grid-cols-2
          gap-12 items-center
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p
              className="
              uppercase tracking-[4px]
              text-black-600
              font-bold text-sm md:text-base
            "
            >
              Welcome to my Professional Space
            </p>

           <h1
              className="
              text-4xl sm:text-5xl md:text-7xl
              font-extrabold
              mt-5
              leading-tight
              text-gray-900
              dark:text-white                "
              >
                Hello, I'm{" "}
                <span
                  className="
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                  drop-shadow-lg
                  "
                >
                  Sabiha Tabassum Saba
                </span>
            </h1>

            <h2
              className="
              mt-6
              text-xl md:text-3xl
              text-gray-700
              dark:text-gray-300
              "
            >
              Full Stack MERN Developer | Modern Web Applications
            </h2>

            <p
              className="
                mt-8
                text-base md:text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
                max-w-xl
                mx-auto md:mx-0
              "
            >
             I create modern web applications that are fast, scalable, and
  user-focused. Passionate about turning ideas into seamless digital
  experiences through clean code and innovative solutions.
            </p>

            {/* Skills */}
            <div
              className="
              mt-6 flex flex-wrap gap-3
              justify-center md:justify-start
              "
            >
              <span
                className="
                px-4 py-2 rounded-full
                bg-blue-500/20
                text-blue-600
                dark:text-blue-400
                "
              >
                React.js
              </span>

              <span
                className="
                px-4 py-2 rounded-full
                bg-cyan-500/20
                text-cyan-600
                dark:text-cyan-400
                "
              >
                Node.js
              </span>

              <span
                className="
                px-4 py-2 rounded-full
                bg-purple-500/20
                text-purple-600
                dark:text-purple-400
                "
              >
                MongoDB
              </span>

               <span
                className="
                px-4 py-2 rounded-full
                bg-indigo-500/20
                text-indigo-600
                dark:text-indigo-400
                "
              >
                Express.js
              </span>
            </div>

            {/* Buttons */}
            <div
              className="
              mt-8 flex flex-wrap gap-4
              justify-center md:justify-start
              "
            >
              <a
                href="#projects"
                className="
                px-6 py-3 rounded-xl
                font-semibold text-white
                bg-gradient-to-r
                from-blue-600 to-cyan-500
                hover:scale-105
                hover:shadow-2xl
                transition-all duration-300
                "
              >
                View My Projects
              </a>

              <a
                href= "/CV_Saba_25.pdf"
                download
                className="
px-6 py-3 rounded-xl
font-semibold
text-gray-900
dark:text-white
border-2
border-cyan-500
hover:bg-gradient-to-r
hover:from-cyan-500
hover:to-blue-600
hover:text-white
hover:scale-105
transition-all duration-300
                "
              >
                Get My Resume
              </a>

              <a
                href="#contact"
                className="
                 px-6 py-3 rounded-xl
font-semibold
border border-gray-500
text-gray-700
dark:text-gray-200
bg-gray-100
dark:bg-slate-800
hover:bg-gray-800
hover:text-white
hover:border-gray-300
dark:hover:bg-gray-700
dark:hover:border-gray-400
hover:scale-105
transition-all duration-300

                "
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div
                className="
                absolute inset-0
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                blur-[70px]
                opacity-30
                animate-pulse
                "
              ></div>

              {/* Image */}
              <motion.img
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={Photo}
                alt="Sabiha Tabassum Saba"
                className="
                relative
                w-56 h-72
                sm:w-64 sm:h-80
                md:w-80 md:h-[420px]
                lg:w-96 lg:h-[500px]
                rounded-xl
                object-cover
                object-top
                shadow-2xl
                "
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
};

export default Hero;