import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "Personal Projects",
        location: "Remote",
        period: "2024 - Present",
        icon: "⚛️",
        description: [
            "Developed full-stack web applications using React, Node.js, Express.js and MongoDB.",
            "Built responsive user interfaces with reusable components and modern frontend practices.",
            "Created authentication systems, REST APIs and database-driven solutions.",
            "Focused on writing clean, maintainable code and improving application performance."
        ]
    },
    {
        role: "Problem Solver & Debugging Mindset",
        company: "Development Journey",
        location: "Remote",
        period: "2023 - Present",
        icon: "🧩",
        description: [
            "Enjoy analyzing problems, finding root causes and implementing effective solutions.",
            "Experienced in debugging application issues and improving code reliability.",
            "Approach challenges with logical thinking and continuous improvement.",
            "Believe every bug is an opportunity to understand systems better."
        ]
    },
    {
        role: "AI-Assisted Developer",
        company: "Modern Development Workflow",
        location: "Remote",
        period: "2025 - Present",
        icon: "🧠",
        description: [
            "Adapt quickly to emerging technologies and modern software development practices.",
            "Use AI tools to improve productivity, debugging speed and learning efficiency.",
            "Apply AI-assisted workflows for code improvement, research and rapid prototyping.",
            "Explore practical ways to combine AI with software engineering."
        ]
    },
    {
        role: "Technology Explorer",
        company: "Continuous Learning",
        location: "Remote",
        period: "2024 - Present",
        icon: "🚀",
        description: [
            "Continuously learning new tools, frameworks and development techniques.",
            "Experimenting with modern web technologies to build better solutions.",
            "Improving software architecture, UI quality and development workflow.",
            "Focused on becoming a more adaptable and versatile developer."
        ]
    }
];

const Experience = () => {
    const [current, setCurrent] = useState(0);

    const nextExperience = () => {
        if (current < experiences.length - 2) {
            setCurrent(current + 1);
        }
    };

    const previousExperience = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    return (
        <section
            id="experience"
            className="
            py-24
            px-6
            "
        >
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-center"
                >
                    <h2
                        className="
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        font-bold
                        "
                    >
                        Experience 💼
                    </h2>

                    <p
                        className="
                        mt-4
                        text-gray-500
                        dark:text-gray-400
                        "
                    >
                        My growth as a developer through building,
                        problem-solving and continuous learning.
                    </p>
                </motion.div>


                <div className="relative mt-14">

                    <button
                        onClick={previousExperience}
                        disabled={current === 0}
                        className="
                        absolute
                        left-0
                        top-1/2
                        -translate-y-1/2
                        z-10
                        w-10
                        h-10
                        rounded-full
                        border
                        dark:border-gray-700
                        hover:border-indigo-500
                        transition
                        disabled:opacity-30
                        "
                    >
                        ←
                    </button>


                    <div
                        className="
                        overflow-hidden
                        mx-8
                        md:mx-12
                        "
                    >

                        <motion.div
                            className="flex"
                            animate={{
                                x: `-${current * (window.innerWidth >= 1024 ? 50 : 100)}%`
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >

                            {experiences.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                    w-full
                                    lg:w-1/2
                                    flex-shrink-0
                                    px-3
                                    "
                                >

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 30
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        whileHover={{
                                            y: -8
                                        }}
                                        className="
                                        h-full
                                        border
                                        border-gray-200
                                        dark:border-gray-800
                                        rounded-2xl
                                        p-6
                                        bg-white
                                        dark:bg-gray-900
                                        transition
                                        "
                                    >

                                        <div
                                            className="
                                            flex
                                            items-center
                                            gap-3
                                            "
                                        >
                                            <span className="text-3xl">
                                                {item.icon}
                                            </span>

                                            <h3
                                                className="
                                                text-xl
                                                font-bold
                                                "
                                            >
                                                {item.role}
                                            </h3>
                                        </div>


                                        <h4
                                            className="
                                            mt-5
                                            text-indigo-500
                                            font-semibold
                                            "
                                        >
                                            {item.company}
                                        </h4>


                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.location}
                                        </p>


                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.period}
                                        </p>


                                        <ul
                                            className="
                                            mt-5
                                            space-y-3
                                            text-gray-600
                                            dark:text-gray-400
                                            leading-relaxed
                                            "
                                        >
                                            {item.description.map((point) => (
                                                <li key={point}>
                                                    • {point}
                                                </li>
                                            ))}
                                        </ul>

                                    </motion.div>

                                </div>

                            ))}

                        </motion.div>

                    </div>


                    <button
                        onClick={nextExperience}
                        disabled={current >= experiences.length - 2}
                        className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        w-10
                        h-10
                        rounded-full
                        border
                        dark:border-gray-700
                        hover:border-indigo-500
                        transition
                        disabled:opacity-30
                        "
                    >
                        →
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Experience;