import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import insights from "../../data/Insights";


const Insights = () => {

    return (

        <section
            id="insights"
            className="
            py-24
            px-6
            bg-white
            dark:bg-slate-950
            transition-colors
            duration-500
            "
        >

            <div
                className="
                max-w-6xl
                mx-auto
                "
            >


                {/* Heading */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:30
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
                    mb-14
                    "
                >

                    <h2
                        className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        "
                    >
                        Development Insights 📈
                    </h2>


                    <p
                        className="
                        mt-4
                        max-w-2xl
                        mx-auto
                        text-gray-600
                        dark:text-gray-400
                        "
                    >
                        Thoughts, approaches and lessons from my
                        journey of building modern software.
                    </p>


                </motion.div>





                {/* Cards */}

                <div
                    className="
                    grid
                    md:grid-cols-3
                    gap-6
                    "
                >


                    {
                        insights.map((item,index)=>(


                            <motion.div

                                key={index}

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

                                transition={{
                                    duration:0.5,
                                    delay:index * 0.15
                                }}

                                whileHover={{
                                    y:-8
                                }}


                                className="
                                group
                                relative
                                rounded-2xl
                                p-[1px]
                                overflow-hidden
                                "
                            >


                                {/* Premium Blue Tech Border */}

                                <div
                                    className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-r
                                    from-blue-600
                                    via-cyan-400
                                    to-blue-600
                                    opacity-40
                                    group-hover:opacity-100
                                    transition
                                    duration-500
                                    "
                                />





                                {/* Card */}

                                <div
                                    className="
                                    relative
                                    h-full
                                    rounded-2xl
                                    bg-slate-50
                                    dark:bg-slate-900/90
                                    p-7
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:shadow-blue-500/20
                                    transition
                                    "
                                >



                                    {/* Number */}

                                    <span
                                        className="
                                        text-sm
                                        font-semibold
                                        text-blue-500
                                        "
                                    >
                                        {item.number}
                                    </span>




                                    {/* Title */}

                                    <h3
                                        className="
                                        mt-5
                                        text-xl
                                        font-bold
                                        text-gray-900
                                        dark:text-white
                                        "
                                    >
                                        {item.title}
                                    </h3>




                                    {/* Description */}

                                    <p
                                        className="
                                        mt-4
                                        text-gray-600
                                        dark:text-gray-400
                                        leading-relaxed
                                        "
                                    >
                                        {item.description}
                                    </p>





                                    {/* Technology Tags */}

                                    <div
                                        className="
                                        flex
                                        flex-wrap
                                        gap-2
                                        mt-6
                                        "
                                    >

                                        {
                                            item.tags.map((tag)=>(

                                                <span

                                                    key={tag}

                                                    className="
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-xs
                                                    bg-blue-50
                                                    dark:bg-blue-950/50
                                                    text-blue-700
                                                    dark:text-blue-300
                                                    "
                                                >

                                                    {tag}

                                                </span>

                                            ))
                                        }

                                    </div>






                                    {/* Link */}

                                    <Link

                                        to={item.link}

                                        className="
                                        inline-flex
                                        mt-7
                                        px-1
                                        py-2
                                        items-center
                                        rounded-xl
                                        border-blue-100
                                        dark:border-blue-700
                                        bg-gradient-to-r
                                        from-cyan-300
                                        to-blue-500
                                        text-white
                                        hover:scale-105
                                        dark:text-cyan-400
                                        font-semibold
                                        hover:translate-x-1
                                        transition
                                        "
                                    >

                                        Read Insight →

                                    </Link>



                                </div>



                            </motion.div>


                        ))
                    }


                </div>



            </div>


        </section>

    );

};


export default Insights;