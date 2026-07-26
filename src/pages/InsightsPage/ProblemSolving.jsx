import InsightLayout from "../../components/Insights/InsightLayout";


const ProblemSolving = () => {


    return (

        <InsightLayout

            title="Problem Solving & Engineering Mindset"

            description="
            My approach to analysing problems, debugging efficiently
            and creating reliable solutions through structured thinking.
            "


            sections={[

                {
                    title:"My Problem Solving Process",

                    items:[

                        "Understand the issue clearly",

                        "Reproduce the problem",

                        "Analyze the root cause",

                        "Research possible solutions",

                        "Test and validate the fix",

                        "Improve the code quality"

                    ]

                },


                {
                    title:"Tools I Use",

                    items:[

                        "Chrome DevTools",

                        "Postman",

                        "Git & GitHub",

                        "VS Code Debugger",

                        "AI-assisted debugging"

                    ]

                },


                {
                    title:"My Mindset",

                    items:[

                        "Focus on understanding the real cause instead of only fixing symptoms",

                        "Use logical thinking and experimentation to find effective solutions",

                        "Treat every bug as an opportunity to improve my understanding"

                    ]

                }

            ]}



            resources={[

                {
                    name:"Chrome DevTools",
                    link:"https://developer.chrome.com/docs/devtools"
                },

                {
                    name:"Postman Learning Center",
                    link:"https://learning.postman.com"
                },

                {
                    name:"Git Documentation",
                    link:"https://git-scm.com/doc"
                },

                {
                    name:"MDN Web Docs",
                    link:"https://developer.mozilla.org"
                }

            ]}


        />

    );

};


export default ProblemSolving;