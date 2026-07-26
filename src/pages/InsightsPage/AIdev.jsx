import InsightLayout from "../../components/Insights/InsightLayout";


const AIDevelopment = () => {


    return (

        <InsightLayout

            title="AI-Assisted Development"

            description="
            How I use AI tools, documentation and modern workflows
            to improve learning, debugging and software development.
            "


            sections={[

                {
                    title:"How AI Helps Me",

                    items:[

                        "Understanding new programming concepts",

                        "Debugging errors faster",

                        "Improving code quality",

                        "Exploring different solutions",

                        "Creating better development workflows"

                    ]

                },


                {
                    title:"My AI Workflow",

                    items:[

                        "Understand the problem before asking for solutions",

                        "Research official documentation",

                        "Use AI to explore possible approaches",

                        "Test solutions and verify results",

                        "Improve and optimize the final implementation"

                    ]

                },


                {
                    title:"Tools & Practices",

                    items:[

                        "AI coding assistants",

                        "Documentation research",

                        "Code analysis",

                        "Developer productivity tools",

                        "Continuous learning workflow"

                    ]

                }


            ]}



            resources={[

                {
                    name:"OpenAI Documentation",
                    link:"https://platform.openai.com/docs"
                },

                {
                    name:"GitHub Copilot",
                    link:"https://github.com/features/copilot"
                },

                {
                    name:"MDN Web Docs",
                    link:"https://developer.mozilla.org"
                },

                {
                    name:"React Documentation",
                    link:"https://react.dev"
                }

            ]}


        />

    );

};


export default AIDevelopment;