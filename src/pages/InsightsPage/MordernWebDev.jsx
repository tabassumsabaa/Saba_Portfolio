import InsightLayout from "../../components/Insights/InsightLayout";


const ModernWebDevelopment = () => {


    return (

        <InsightLayout

            title="Modern Web Development"

            description="
            My approach to building scalable web applications using modern frontend architecture, APIs and clean coding practices.
            "

            sections={[

                {
                    title:"My Approach",

                    items:[
                        "Understand the problem",
                        "Plan application structure",
                        "Build reusable components",
                        "Connect APIs",
                        "Implement authentication",
                        "Test and improve performance"
                    ]
                },


                {
                    title:"Technologies I Use",

                    items:[
                        "React",
                        "JavaScript",
                        "Tailwind CSS",
                        "Node.js",
                        "Express.js",
                        "MongoDB"
                    ]
                }

            ]}


            resources={[

                {
                    name:"React Documentation",
                    link:"https://react.dev"
                },

                {
                    name:"MDN Web Docs",
                    link:"https://developer.mozilla.org"
                },

                {
                    name:"Node.js Documentation",
                    link:"https://nodejs.org/docs"
                },

                {
                    name:"MongoDB Documentation",
                    link:"https://www.mongodb.com/docs"
                },

                {
                    name:"Express.js Documentation",
                    link:"https://expressjs.com"
                },

                {
                    name:"Tailwind CSS Documentation",
                    link:"https://tailwindcss.com/docs"
                }

            ]}


        />

    );

};


export default ModernWebDevelopment;