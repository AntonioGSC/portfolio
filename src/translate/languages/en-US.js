import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    // nodejs,
    // mongodb,
    git,
    figma,
    docker,
    threejs,
    angular,
    golang,
    java,
    nextjs,
    oracle,
    smarters,
} from '../../assets';

const messages = {
    en: {
        translations: {
            navbar: {
                logo: {
                    prefix: 'Antonio',
                    suffix: 'DEV'
                },
                navLinks: [
                    {
                        id: "about",
                        title: "About",
                    },
                    {
                        id: "work",
                        title: "Experience",
                    },
                    {
                        id: "contact",
                        title: "Contact",
                    },
                ]
            },
            hero: {
                title: {
                    prefix: 'Hi, I\'m',
                    name: 'Antonio'
                },
                subtitle: 'Software Developer, specializing in Front‐end. Studying an MBA in Software Engineering at FIAP.'
            },
            about: {
                subtext: 'Introduction',
                title: 'Overview.',
                overviewInformation: [
                    `Experience in software engineering with specialties in frontend development and testing, infrastructure, software architecture, best practices,
                    design pattern, SEO, user experience, usability and accessibility.`,
                    `I am an adaptable and empathetic professional, I work collaboratively by identifying and developing solutions focused on the needs of the com‐
                    pany. My main motivation is always to contribute to the creation and construction of innovative solutions to modernize processes through tech‐
                    nology.`
                ],
                services: [
                    {
                        title: "Front-End Developer",
                        icon: web,
                    },
                    {
                        title: "Back-end Developer",
                        icon: backend,
                    },
                    {
                        title: "Activities in Architecture and Product",
                        icon: mobile,
                    },
                    {
                        title: "Software Engineer",
                        icon: creator,
                    },
                ]
            },
            experience: {
                subtext: 'What I Have Done So Far',
                title: 'Work Experience.',
                experiences: [
                    {
                        title: "Internet Data Analyst",
                        company_name: "smarters",
                        icon: smarters,
                        iconBg: "#383E56",
                        date: "Sep. 2020 - Jul. 2021",
                        points: [
                            "Construction and training of Bots(Agents) for Messenger, Instagram and Whatsapp.",
                            "Modeling and development of Javascript APIs used in Bots (Agents).",
                            "Understanding of NLP (Natural Language Processing) in the construction of the artificial intelligence of Bots.",
                        ],
                    },
                    {
                        title: "Front-end Developer",
                        company_name: "Oracle",
                        icon: oracle,
                        iconBg: "#E6DEDD",
                        date: "Aug. 2021 - Apr. 2022",
                        points: [
                            "Building pages for e‐commerce using React and Knockout.JS in Oracle Cloud Commerce solution.",
                            "Build plugins in Javascript and HTML/CSS Vanilla in Oracle Fields solution.",
                            "Remodel the look of pages based on the Oracle Fusion solution.",
                            "Oracle Cloud Infrastructure Foundations certification.",
                        ],
                    },
                    {
                        title: "Front-end Developer",
                        company_name: "smarters",
                        icon: smarters,
                        iconBg: "#383E56",
                        date: "Apr. 2022 - Present",
                        points: [
                            "Front‐end creation of applications for sending and tracking messages sent on WhatsApp, Instagram and Messenger.",
                            "Idealization and construction of new applications and solutions, always working with the highest standards and technical quality.",
                            "Focus on Angular front‐end development in applications and throughout the company’s internal system.",
                            "Experience with NextJs for building smarters external tools.",
                            "Front‐end development using HTML, CSS, JS in portfolio and landing page.",
                            "Back‐end understanding in GoLang and NodeJS in microservices consumed on the front‐end.",
                        ],
                    },
                ]
            },
            tech2: {
                technologies: [
                    // {
                    //     name: "GoLang",
                    //     icon: golang,
                    // },
                    // {
                    //     name: "Java",
                    //     icon: java,
                    // },
                    {
                        name: "Angular",
                        icon: angular,
                    },
                    {
                        name: "NextJs",
                        icon: nextjs,
                    },
                    {
                        name: "ReactJS",
                        icon: reactjs,
                    },
                    // {
                    //     name: "Redux Toolkit",
                    //     icon: redux,
                    // },
                    // {
                    //     name: "Three JS",
                    //     icon: threejs,
                    // },
                    // {
                    //     name: "Tailwind CSS",
                    //     icon: tailwind,
                    // },
                    // {
                    //     name: "git",
                    //     icon: git,
                    // },
                    // {
                    //     name: "docker",
                    //     icon: docker,
                    // },
                    // {
                    //     name: "figma",
                    //     icon: figma,
                    // },
                ]
            },
            tech: {
                technologies: [
                    {
                        name: "HTML 5 and CSS 3",
                        icons: [
                            html,
                            css
                        ],
                    },
                    {
                        name: "TypeScript and Javascript",
                        icons: [
                            typescript,
                            javascript
                        ],
                    },
                    {
                        name: "Angular and Redux",
                        icons: [
                            angular,
                            redux
                        ],
                    },
                    {
                        name: "NextJs and React",
                        icons: [
                            nextjs,
                            reactjs
                        ],
                    },
                    // {
                    //     name: "GoLang and Java",
                    //     icons: [
                    //         golang,
                    //         java
                    //     ],
                    // },
                    {
                        name: "Tailwind CSS and Three JS",
                        icons: [
                            tailwind,
                            threejs
                        ],
                    },
                    // {
                    //     name: "Git and Docker",
                    //     icons: [
                    //         git,
                    //         docker
                    //     ],
                    // },
                ]
            },
            contact: {
                subtext: 'Get in touch',
                title: 'Contact.',
                form: {
                    name: {
                        label: 'Name',
                        placeholder: 'What\'s your name?'
                    },
                    email: {
                        label: 'Email',
                        placeholder: 'What\'s your web address?'
                    },
                    message: {
                        label: 'Message',
                        placeholder: 'What would you like to say?'
                    },
                    send: {
                        message: 'Send',
                        loading: 'Sending...',
                    },
                    formSend: {
                        success: 'Thank you! i will get back as soon as possible.',
                        error: 'Sorry! Something went wrong.'
                    }
                }
            }
        }
    }
};

export { messages };