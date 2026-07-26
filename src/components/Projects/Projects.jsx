import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import sabfitzone from "../../assets/Image/sabfitzone.png";
import civicsurvey from "../../assets/Image/civicsurvay.png";
import portfolio from "../../assets/Image/portfolio.png";
import realestate from "../../assets/Image/realstate.png";


const projects = [

  {
    id: "01",
    title: "CivicSurvey",
    category: "Community Survey Platform",
    description:
      "A modern survey platform for collecting community feedback and insights.",
    image: civicsurvey,
    technologies:[
      "React",
      "Firebase",
      "MongoDB",
      "Express",
    ],
    github:
      "https://github.com/tabassumsabaa/b9-a12-client",
    demo:
      "https://b9a12-client-side-e171a.web.app/",
    accent:
      "border-blue-300",
    button:
      "bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700",
  },


  {
    id:"02",
    title:"Developer Portfolio",
    category:"Personal Portfolio",
    description:
      "A modern developer portfolio designed with responsive layouts, animations, and professional UI principles.",
    image:portfolio,
    technologies:[
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    github:"#",
    demo:"#",
    accent:
      "border-blue-300",
    button:
      "bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700",
  },


  {
    id:"03",
    title:"Real Estate",
    category:"Property Management Platform",
    description:
      "A responsive real estate platform where users can explore properties and view detailed property information.",
    image:realestate,
    technologies:[
      "React",
      "Firebase",
      "Tailwind CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/tabassumsabaa/b9-a9-real-estate",
    demo:
      "https://b9a9-real-estate-tabassumsabaa.web.app/",
    accent:
      "border-blue-300",
    button:
      "bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700",
  },

];



function ProjectCard({project}){

return(

<motion.article

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
duration:.6
}}

whileHover={{
y:-8
}}

className="
group
bg-white
rounded-3xl
p-5
border
border-gray-200
shadow-md
hover:shadow-xl
transition
duration-500
h-full
flex
flex-col
"

>


<div
className={`
overflow-hidden
rounded-2xl
border-4
${project.accent}
`}
>

<img

src={project.image}

alt={`${project.title} project`}

className="
w-full
h-48
object-cover
group-hover:scale-105
transition
duration-700
"

/>

</div>



<div className="pt-5 flex flex-col flex-1">


<h3 className="
text-2xl
font-bold
text-gray-900
">

{project.title}

</h3>



<p className="
mt-2
text-sm
text-gray-500
font-medium
">

{project.category}

</p>



<p className="
mt-3
text-gray-600
text-sm
leading-relaxed
">

{project.description}

</p>



<div className="
flex
flex-wrap
gap-2
mt-4
">

{
project.technologies.map((tech,index)=>(

<span

key={`${tech}-${index}`}

className="
px-3
py-1
rounded-full
bg-gray-100
text-gray-700
text-xs
font-semibold
"

>

{tech}

</span>

))

}

</div>



<div className="
flex
gap-3
mt-auto
pt-6
">


<a

href={project.demo}

target="_blank"

rel="noreferrer"

className={`

px-4
py-2
rounded-lg
text-white
text-sm
font-semibold
transition
${project.button}

`}

>

Live Demo 🌐

</a>


<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
px-4
py-2
rounded-lg
border
border-blue-300
bg-white
text-gray-700
text-sm
font-semibold
hover:bg-blue-100
hover:border-blue-400
transition
"

>

GitHub 🔗

</a>


</div>


</div>


</motion.article>

)

}
export default function Projects(){

return(
<>

{/* FEATURED PROJECT */}

<section

className="
py-24
px-6
bg-gradient-to-br
from-blue-50
via-white
to-emerald-50
"

>

<div className="
max-w-7xl
mx-auto
">


{/* FEATURED HEADING */}

<div className="
text-center
mb-14
">



<h2

className="
mt-4
text-5xl
font-bold
text-gray-900
"

>


My Featured Work ⚡

</h2>

<p

className="

tracking-[0.3em]
text-sm
text-gray-500
pt-5
"

>

A showcase of my flagship full-stack project.
</p>


</div>



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

transition={{
duration:0.6
}}

className="
grid
grid-cols-1
lg:grid-cols-5
gap-10
items-center
bg-white
rounded-3xl
p-8
shadow-xl
border
border-blue-100
"

>



{/* Image */}

<div

className="
order-2
lg:order-1
relative
group
lg:col-span-3
"
>
<div

className="
absolute
inset-0
bg-gradient-to-r
from-cyan-400
to-blue-500
rounded-3xl
blur-xl
opacity-20
group-hover:opacity-40
transition
"

></div>

<img

src={sabfitzone}

alt="SabFitZone"

className="
relative
rounded-3xl
shadow-2xl
w-full
object-cover
group-hover:scale-105
transition
duration-500
"

/>


</div>

{/* Content */}

<div

className="
order-1
lg:order-2
lg:col-span-2
"

>

<h2

className="
text-4xl
md:text-5xl
font-bold
mt-4
text-gray-900
"

>

SabFitZone

</h2>



<p

className="
mt-2
text-sm
text-gray-500
font-medium
"

>

Fitness Platform

</p>

<p

className="
mt-6
text-gray-600
leading-relaxed
text-lg
"

>

A full-stack fitness platform that helps users explore services, manage activities, and enjoy a seamless experience with a modern responsive interface.

</p>

{/* Technology */}

<div className="
flex
flex-wrap
gap-3
mt-6
">


{
[
"React",
"Node.js",
"Express",
"MongoDB",
"Tailwind CSS"
].map((tech)=>(

<span

key={tech}

className="
px-4
py-2
rounded-full
bg-white
border
border-gray-200
text-gray-700
text-sm
font-medium
shadow-sm
"

>

{tech}

</span>

))

}


</div>
{/* Buttons */}

<div
className="
flex
flex-wrap
gap-4
mt-8
"

>

<a

href="https://b9a11-client-side-54051.web.app/"

target="_blank"

rel="noreferrer"

className="
inline-flex
items-center
px-6
py-3
rounded-xl
bg-gradient-to-r
from-cyan-400
to-blue-600
text-white
font-semibold
shadow-lg
hover:scale-105
hover:shadow-xl
transition
duration-300
"

>

Live Demo 🌐

</a>

<a

href="https://github.com/tabassumsabaa/b9-a11-client"

target="_blank"

rel="noreferrer"

className="
inline-flex
items-center
px-6
py-3
rounded-xl
border
border-blue-300
bg-white
text-gray-700
font-semibold
hover:bg-blue-200
hover:border-gray-400
transition
duration-300
"

>

GitHub 🔗

</a>
</div>
</div>

</motion.div>
</div>
</section>

{/* ALL PROJECTS */}

<section

id="projects"

className="
py-12
px-6
bg-gradient-to-br
from-slate-100
via-blue-50
to-slate-200
"

>


<div

className="
max-w-7xl
mx-auto
"

>

<div

className="
text-center
mb-14
"

>

<h2

className="
mt-4
text-5xl
font-bold
text-gray-900
"

>

My Projects 🚀

</h2>

<p

className="
mt-4
text-gray-600
"

>

Some things I have built recently.

</p>

</div>

<div className="relative px-2">
<Swiper

modules={[Navigation]}

navigation={{

nextEl:".project-next",

prevEl:".project-prev"

}}

spaceBetween={30}

slidesPerView={1}


breakpoints={{

640:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}}

className="project-slider"
>
{

projects.map(project=>(

<SwiperSlide
key={project.id}
className="!h-auto"
>
<ProjectCard project={project}/>
</SwiperSlide>

))

}

</Swiper>

{/* Left Arrow */}

<button

className="
project-prev
absolute
left-0
top-1/2
-translate-y-1/2
z-10

w-8
h-8
md:w-10
md:h-10
lg:w-12
lg:h-12

rounded-full
bg-white
shadow-lg
text-blue-600
flex
items-center
justify-center
text-sm
md:text-base
lg:text-xl

hover:scale-110
transition
"

>

←

</button>

{/* Right Arrow */}

<button

className="
project-next
absolute
right-0
top-1/2
-translate-y-1/2
z-10

w-8
h-8
md:w-10
md:h-10
lg:w-12
lg:h-12

rounded-full
bg-white
shadow-lg
text-blue-600
flex
items-center
justify-center
text-sm
md:text-base
lg:text-xl

hover:scale-110
transition
"

>

→

</button>

</div>

</div>
</section>


</>

)

}