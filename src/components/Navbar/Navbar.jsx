import { useState } from "react";

const mainLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

const extraLinks = [
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Insights",
    href: "#insights",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav
        className="
        fixed
        top-0
        left-0
        z-50
        w-full
        backdrop-blur-xl
        transition-all
        duration-500
        bg-gradient-to-r
        from-slate-50/80
        via-blue-50/60
        to-cyan-50/60
        border-b
        border-blue-100/40
        shadow-sm
        "
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="
            text-xl
            md:text-2xl
            font-bold
            tracking-wide
            hover:text-blue-600
            transition
            duration-300
            "
          >
            Sabiha Tabassum{" "}
            <span className="text-blue-500">SABA</span>
          </a>


          {/* DESKTOP NAVBAR */}

          <div className="hidden lg:flex items-center gap-8">

            <ul className="flex items-center gap-7">

              {/* Main Links */}

              {mainLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-black
                    transition
                    duration-300
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}


              {/* Extra Links */}

              {showMore &&
                extraLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-black
                      transition
                      duration-300
                      "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}


              {/* More Button */}

              <li>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="
                  text-sm
                  font-medium
                  text-gray-700
                  hover:text-black
                  transition
                  duration-300
                  "
                >
                  {showMore ? "▲" : "More ▼"}
                </button>
              </li>

            </ul>


            {/* Resume Button */}

            <a
              href="/CV_Saba_25.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-4
              py-2
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-blue-500
              via-sky-500
              to-cyan-500
              shadow-lg
              hover:shadow-blue-300/50
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Resume
            </a>

          </div>



          {/* MOBILE & TABLET */}

          <div className="flex lg:hidden items-center gap-4">


            {/* Resume */}

            <a
              href="/CV_Saba_25.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-3
              py-2
              rounded-lg
              text-sm
              font-semibold
              text-white
              bg-gradient-to-r
              from-blue-500
              via-sky-500
              to-cyan-500
              "
            >
              Resume
            </a>



            {/* Menu Button */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-3xl font-semibold"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>

          </div>

        </div>



        {/* MOBILE MENU */}

        {mobileMenu && (
          <div
            className="
            lg:hidden
            border-t
            border-gray-200
            bg-white
            shadow-md
            "
          >

            <ul className="flex flex-col items-center gap-6 py-8">

              {[...mainLinks, ...extraLinks].map((item) => (
                <li key={item.name}>

                  <a
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                    text-lg
                    font-medium
                    text-gray-700
                    hover:text-blue-600
                    transition
                    duration-300
                    "
                  >
                    {item.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;