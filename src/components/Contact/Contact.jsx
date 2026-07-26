import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      emailjs
       .sendForm(
       import.meta.env.VITE_EMAIL_SERVICE_ID,
       import.meta.env.VITE_EMAIL_TEMPLATE_ID,
       form.current,
      {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      }
    )
      .then(() => {
        alert("Message sent successfully!");
        setSending(false);
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message!");
        setSending(false);
      });
  };

  return (
    <Reveal>
      <section
        id="contact"
        className="
        py-20 md:py-24
        px-4 sm:px-6
        overflow-x-hidden
        bg-gradient-to-br
        from-slate-100
        via-blue-50
        to-slate-200
        dark:from-slate-900
        dark:via-slate-800
        dark:to-blue-950
      "
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              dark:text-white
            "
            >
              Contact Me ✉️
            </h2>

            <p
              className="
              mt-4
              text-sm
              sm:text-base
              text-gray-600
              dark:text-gray-400
              max-w-2xl
              mx-auto
            "
            >
              Let's connect and discuss how technology can transform ideas
              into reliable, scalable solutions.
            </p>
          </motion.div>

          {/* Cards */}

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            mt-14
            items-start
          "
          >
            {/* Contact Information */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-full
              h-full
              bg-white/70
              dark:bg-white/10
              backdrop-blur-xl
              border
              border-gray-200
              dark:border-white/20
              rounded-3xl
              p-6 md:p-8
              shadow-xl
            "
            >
              <div
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                bg-green-500/10
                dark:bg-green-400/10
                text-green-600
                dark:text-green-400
                shadow-lg
                shadow-green-500/20
                "
              >
                <span className="animate-pulse">●</span>
                Available for New Opportunities
              </div>

              <h3
                className="
                mt-5
                text-2xl
                md:text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
              >
                🚀 Let's Connect
              </h3>

              <p
                className="
                mt-4
                text-gray-600
                dark:text-gray-300
                leading-7
              "
              >
                I am always interested in new projects, creative ideas and
                opportunities to collaborate.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sabihatabassum0511@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  shadow
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
                >
                  <FaEnvelope className="text-3xl text-cyan-500 shrink-0" />

                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Email
                    </h4>

                    <p
                      className="
                      text-sm
                      sm:text-base
                      text-gray-500
                      dark:text-gray-300
                      break-all
                    "
                    >
                      sabihatabassum0511@gmail.com
                    </p>
                  </div>
                </a>

                {/* Github */}

                <a
                  href="https://github.com/tabassumsabaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  shadow
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
                >
                  <FaGithub className="text-3xl dark:text-white shrink-0" />

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      GitHub
                    </h4>

                    <p className="text-gray-500 dark:text-gray-300">
                      tabassumsabaa
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}

                <a
                  href="https://linkedin.com/in/sabiha-tabassum-saba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  shadow
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
                >
                  <FaLinkedin className="text-3xl text-blue-600 shrink-0" />

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      LinkedIn
                    </h4>

                    <p className="text-gray-500 dark:text-gray-300">
                      Sabiha Tabassum Saba
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
              w-full
              h-full
              self-start
              bg-white/70
              dark:bg-white/10
              backdrop-blur-xl
              border
              border-gray-200
              dark:border-white/20
              rounded-3xl
              p-6 md:p-8
              shadow-xl
            "
            >
              <h3
                className="
                text-2xl
                md:text-3xl
                font-bold
                text-gray-900
                dark:text-white
                mb-8
              "
              >
                💬 Send a Message
              </h3>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  border
                  border-gray-200
                  dark:border-white/20
                  outline-none
                  text-gray-900
                  dark:text-white
                  placeholder-gray-400
                  dark:placeholder-gray-300
                "
                />

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  border
                  border-gray-200
                  dark:border-white/20
                  outline-none
                  text-gray-900
                  dark:text-white
                  placeholder-gray-400
                  dark:placeholder-gray-300
                "
                />

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white
                  dark:bg-white/10
                  border
                  border-gray-200
                  dark:border-white/20
                  outline-none
                  text-gray-900
                  dark:text-white
                  placeholder-gray-400
                  dark:placeholder-gray-300
                "
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-600
                  text-white
                  font-bold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                "
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;