import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const InsightLayout = ({
    title,
    description,
    sections,
    resources
}) => {

    return (

        <section
            className="
            min-h-screen
            py-24
            px-6
            bg-white
            dark:bg-slate-950
            "
        >

            <div
                className="
                max-w-5xl
                mx-auto
                "
            >


                {/* Header */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                >


<Link

    to="/#insights"

    className="
inline-flex
items-center
justify-center
gap-2
mb-8
px-5
py-4
rounded-xl
font-bold
border
border-blue-200
dark:border-blue-900
bg-gradient-to-r
from-cyan-400
to-blue-600
text-white
hover:scale-105
hover:translate-x-[-4px]
hover:shadow-lg
hover:shadow-blue-500/20
transition
shadow-lg
    "

>

← Back to Insights

</Link>

                    <h1
                        className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        "
                    >
                        {title}
                    </h1>


                    <p
                        className="
                        mt-6
                        text-lg
                        max-w-3xl
                        text-gray-600
                        dark:text-gray-400
                        leading-relaxed
                        "
                    >
                        {description}
                    </p>


                </motion.div>





                {/* Content */}

                <div
                    className="
                    mt-16
                    space-y-8
                    "
                >


                    {
                        sections.map((section,index)=>(


                            <motion.div

                                key={index}

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
                                relative
                                rounded-2xl
                                p-[1px]
                                overflow-hidden
                                "

                            >


                                {/* Blue Border */}

                                <div
                                    className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-r
                                    from-blue-600
                                    via-cyan-400
                                    to-blue-600
                                    opacity-50
                                    "
                                />



                                {/* Card */}

                                <div
                                    className="
                                    relative
                                    rounded-2xl
                                    bg-slate-50
                                    dark:bg-slate-900
                                    p-8
                                    "
                                >


                                    <h2
                                        className="
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                        dark:text-white
                                        "
                                    >
                                        {section.title}
                                    </h2>



                                    <ul
                                        className="
                                        mt-6
                                        space-y-4
                                        "
                                    >

                                        {
                                            section.items.map((item)=>(

                                                <li

                                                    key={item}

                                                    className="
                                                    flex
                                                    gap-3
                                                    text-gray-600
                                                    dark:text-gray-400
                                                    "
                                                >

                                                    <span
                                                        className="
                                                        text-cyan-500
                                                        font-bold
                                                        "
                                                    >
                                                        →
                                                    </span>


                                                    {item}

                                                </li>

                                            ))
                                        }

                                    </ul>


                                </div>



                            </motion.div>


                        ))
                    }


                </div>
                              {/* Resources */}

                {
                    resources && (

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
                            mt-10
                            relative
                            rounded-2xl
                            p-[1px]
                            overflow-hidden
                            "

                        >

                            {/* Gradient Border */}

                            <div
                                className="
                                absolute
                                inset-0
                                bg-gradient-to-r
                                from-blue-600
                                via-cyan-400
                                to-blue-600
                                opacity-50
                                "
                            />


                            {/* Resource Card */}

                            <div
                                className="
                                relative
                                rounded-2xl
                                bg-slate-50
                                dark:bg-slate-900
                                p-8
                                "
                            >


                                <h2
                                    className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                    "
                                >
                                    Resources
                                </h2>



                                <div
                                    className="
                                    mt-6
                                    flex
                                    flex-wrap
                                    gap-4
                                    "
                                >

                                    {
                                        resources.map((resource)=>(

                                            <a

                                                key={resource.name}

                                                href={resource.link}

                                                target="_blank"

                                                rel="noopener noreferrer"

                                                className="
                                                px-4
                                                py-2
                                                rounded-xl
                                                bg-blue-50
                                                dark:bg-blue-950
                                                text-blue-600
                                                dark:text-cyan-400
                                                font-medium
                                                hover:scale-105
                                                transition
                                                "
                                            >

                                                {resource.name}

                                            </a>

                                        ))
                                    }

                                </div>


                            </div>


                        </motion.div>

                    )
                }

            </div>


        </section>

    );
};


export default InsightLayout;