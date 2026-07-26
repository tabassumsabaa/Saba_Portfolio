import { motion } from "framer-motion";
import { useState , useEffect} from "react";
import codesoft from"../../assets/certificatesjpg/codesoft certificate.jpg";
import htmlCss from"../../assets/certificatesjpg/Udemy.Certificate.jpg";
import cssJava from"../../assets/certificatesjpg/Img2.jpg";
import udemy from"../../assets/certificatesjpg/Img3.jpg";

const certifications = [

    {
        title: "Web Development Internship",
        issuer: "CodeSoft",
        year: "December 2023",
        image: codesoft,
        link: codesoft
    },

    {
        title: "HTML & CSS for Beginners",
        issuer: "Udemy",
        year: "May 2023",
        image: htmlCss,
        link: htmlCss
    },

    {
        title: "CSS & JavaScript for Beginners",
        issuer: "Udemy",
        year: "May 2023",
        image: cssJava,
        link: cssJava
    },

    {
        title: "PHP, MySQL & AJAX Development",
        issuer: "Udemy",
        year: "May 2023",
        image: udemy,
        link: udemy
    }

];


const Certifications = () => {

const [current, setCurrent] = useState(0);
const [cardsPerView, setCardsPerView] = useState(3);

useEffect(() => {
    const updateCards = () => {
        if (window.innerWidth < 768) {
            setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
            setCardsPerView(2);
        } else {
            setCardsPerView(3);
        }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
}, []);

    const nextCertificate = () => {

    if (current < certifications.length - cardsPerView) {
        setCurrent(current + 1);
    }

};


    const previousCertificate = () => {

    if (current > 0) {
        setCurrent(current - 1);
    }

};


    return (

        <section
            id="certifications"
            className="
            py-24
            px-6
             bg-gray-50
    dark:bg-slate-950
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                "
            >

                {/* Heading */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    className="
                    text-center
                    "
                >

                    <h2
                        className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        "
                    >
                        Certifications  🏆
                    </h2>


                    <p
                        className="
                        mt-4
                        text-gray-500
                        dark:text-gray-400
                        "
                    >
                        Professional certificates and continuous learning achievements.
                    </p>


                </motion.div>



                {/* Slider */}

                <div
                    className="
                    relative
                    mt-14
                    "
                >


                    <button
     onClick={previousCertificate}
    disabled={current === 0}
    className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    z-10
    w-10
    h-10
    sm:w-12
    sm:h-12
    rounded-full
    flex
    items-center
    justify-center
    bg-white/90
    dark:bg-slate-900/90
    backdrop-blur
    border
    border-gray-200
    dark:border-slate-700
    shadow-lg
    hover:scale-110
    transition
    disabled:opacity-30
"
                    >
                        ←
                    </button>



                    <div
                        className="
                        overflow-hidden
                        mx-12
                        sm:mx-16
                        "
                    >

                        <motion.div

                            className="
                            flex
                            "

animate={{
    x: `-${current * (100 / cardsPerView)}%`
}}

                            transition={{
                                duration:0.5,
                                ease:"easeInOut"
                            }}

                        >

                            {
                                certifications.map((certificate,index)=>(


                                    <div

                                    key={index}

                                    className="
                                    w-full
                                    md:w-1/2
                                    lg:w-1/3
                                    flex-shrink-0
                                    px-3
                                    "

                                    >


                                        <motion.div

                                            whileHover={{
                                                y:-8,
                                                scale:1.02
                                            }}

                                            className="
                                            h-[420px]
                                            rounded-3xl
                                            overflow-hidden
                                            border
                                            border-gray-200
                                            dark:border-gray-800
                                            bg-white
                                            dark:bg-gray-950
                                            shadow-lg
                                            flex
                                            flex-col
                                            "

                                        >


                                            <img

                                                src={certificate.image}

                                                alt={certificate.title}

                                                className="
                                                w-full
                                                h-52
                                                object-cover
                                                "
                                            />



                                            <div
                                                className="
                                                p-6
                                                flex
                                                flex-col
                                                flex-1
                                                "
                                            >


                                                <h3

                                                className="
                                                text-xl
                                                font-bold
                                                "
                                                >

                                                    {certificate.title}

                                                </h3>



                                                <p

                                                className="
                                                mt-2
                                                text-gray-500
                                                dark:text-gray-400
                                                "
                                                >

                                                    {certificate.issuer}

                                                </p>



                                                <p
                                                className="
                                                text-sm
                                                text-gray-400
                                                mt-1
                                                "
                                                >

                                                    {certificate.year}

                                                </p>



                                                <a

                                                href={certificate.link}

                                                target="_blank"

                                                rel="noopener noreferrer"

                                                className="
                                                mt-auto
                                                text-center
                                                py-2
                                                rounded-lg
                                                bg-cyan-500
                                                text-black
                                                hover:bg-cyan-600
                                                transition
                                                "

                                                >

                                                    View Certificate

                                                </a>


                                            </div>


                                        </motion.div>


                                    </div>


                                ))
                            }


                        </motion.div>


                    </div>



                    <button

                         onClick={nextCertificate}
    disabled={current >= certifications.length - cardsPerView}
    className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    z-10
    w-10
    h-10
    sm:w-12
    sm:h-12
    rounded-full
    flex
    items-center
    justify-center
    bg-white/90
    dark:bg-slate-900/90
    backdrop-blur
    border
    border-gray-200
    dark:border-slate-700
    shadow-lg
    hover:scale-110
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


export default Certifications;