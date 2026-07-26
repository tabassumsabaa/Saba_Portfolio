import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Sabiha <span className="text-cyan-400">Tabassum Saba</span>
            </h3>

            <p className="mt-3 text-gray-400 max-w-md">
              Full Stack MERN Developer crafting modern, scalable, and
              user-focused web experiences with clean and efficient solutions.
            </p>
          </div>


          {/* Social Links */}
          <div className="flex items-center gap-6 text-2xl">

            <a
              href="https://github.com/tabassumsabaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FiGithub />
            </a>


            <a
              href="https://linkedin.com/in/sabiha-tabassum-saba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FiLinkedin />
            </a>


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sabihatabassum0511@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FiMail />
            </a>

          </div>

        </div>


        {/* Divider */}
        <hr className="border-slate-700 my-8" />


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {year} Sabiha Tabassum Saba. All Rights Reserved.
          </p>


          <div className="flex items-center gap-5">

            <p className="text-sm text-gray-500">
              Built with React & Tailwind CSS
            </p>


            <a
              href="#"
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-slate-700
                text-gray-400
                hover:border-cyan-400
                hover:text-cyan-400
                transition
                duration-300
              "
            >
              <FiArrowUp />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;