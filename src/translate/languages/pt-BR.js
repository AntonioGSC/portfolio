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
    pt: {
        translations: {
            navbar: {
                logo: {
                    prefix: 'Antonio',
                    suffix: 'DEV'
                },
                navLinks: [
                    {
                        id: "about",
                        title: "Sobre",
                    },
                    {
                        id: "work",
                        title: "Experiência",
                    },
                    {
                        id: "contact",
                        title: "Contato",
                    },
                ]
            },
            hero: {
                title: {
                    prefix: 'Olá, Eu sou o',
                    name: 'Antonio'
                },
                subtitle: 'Desenvolvedor de Software, especializado em Front-end. Cursando MBA em Engenharia de Software pela FIAP.'
            },
            about: {
                subtext: 'Introdução',
                title: 'Sobre.',
                overviewInformation: [
                    `Experiência em engenharia de software com especialidades em desenvolvimento frontend e testes, infraestrutura, 
                    arquitetura de software, boas práticas, design pattern, SEO, experiência de usuário, usabilidade e acessibilidade.`,
                    `Sou um profissional adaptável e empático, atuo de maneira colaborativa identificando e elaborando soluções com foco nas necessidades da
                    empresa. Minha principal motivação é sempre contribuir na criação e construção de soluções inovadoras para modernizar processos através da
                    tecnologia.`
                ],
                services: [
                    {
                        title: "Desenvolvedor Front-End",
                        icon: web,
                    },
                    {
                        title: "Desenvolvedor Back-end",
                        icon: backend,
                    },
                    {
                        title: "Atuação em Arquitetura e Produto",
                        icon: mobile,
                    },
                    {
                        title: "Engenheiro de Software",
                        icon: creator,
                    },
                ]
            },
            experience: {
                subtext: 'Com o que já trabalhei',
                title: 'Experiência.',
                experiences: [
                    {
                        title: "Analista de Dados de Internet",
                        company_name: "smarters",
                        icon: smarters,
                        iconBg: "#383E56",
                        date: "Set. 2020 - Jul. 2021",
                        points: [
                            "Construção e treinamento de Bots(Agentes) para Messenger, Instagram e Whatsapp.",
                            "Modelagem e desenvolvimento de APIs em Javascript utilizadas nos Bots(Agentes).",
                            "Entendimento de NLP(Processamento de linguagem natural) na construção da inteligência artificial dos Bots.",
                        ],
                    },
                    {
                        title: "Front-end Developer",
                        company_name: "Oracle",
                        icon: oracle,
                        iconBg: "#E6DEDD",
                        date: "Ago. 2021 - Abr. 2022",
                        points: [
                            "Construção de páginas para e-commerce utilizando React e Knockout.JS na solução Oracle Cloud Commerce.",
                            "Construção de plugins em Javascript e HTML/CSS Vanilla na solução Oracle Fields.",
                            "Remodelagem do visual das páginas baseadas na solução Oracle Fusion.",
                            "Certificação Oracle Cloud Infrastructure Foundations.",
                        ],
                    },
                    {
                        title: "Front-end Developer",
                        company_name: "smarters",
                        icon: smarters,
                        iconBg: "#383E56",
                        date: "Abr. 2022 - Atualmente",
                        points: [
                            "Criação do Front-end de aplicações de envio e rastreamento de mensagens enviadas no WhatsApp, Instagram e Messenger.",
                            "Idealização e construção de novas aplicações e soluções trabalhando sempre com a mais alta exigência e qualidade técnica.",
                            "Foco no desenvolvimento front-end Angular nas aplicações e em todo o sistema interno da empresa.",
                            "Experiência com NextJs para construção de ferramentas externas do smarters.",
                            "Desenvolvimento front-end utilizando HTML, CSS, JS e Handlebars no portfólio e landing page.",
                            "Entendimento do back-end utilizando GoLang e NodeJS.",
                        ],
                    },
                ]
            },
            tech: {
                technologies: [
                    {
                        name: "HTML 5 e CSS 3",
                        icons: [
                            html,
                            css
                        ],
                    },
                    {
                        name: "TypeScript e Javascript",
                        icons: [
                            typescript,
                            javascript
                        ],
                    },
                    {
                        name: "Angular e Redux",
                        icons: [
                            angular,
                            redux
                        ],
                    },
                    {
                        name: "NextJs e React",
                        icons: [
                            nextjs,
                            reactjs
                        ],
                    },
                    // {
                    //     name: "GoLang e Java",
                    //     icons: [
                    //         golang,
                    //         java
                    //     ],
                    // },
                    {
                        name: "Tailwind CSS e Three JS",
                        icons: [
                            tailwind,
                            threejs
                        ],
                    },
                    // {
                    //     name: "Git e Docker",
                    //     icons: [
                    //         git,
                    //         docker
                    //     ],
                    // },
                ]
            },
            contact: {
                subtext: 'Entre em contato',
                title: 'Contato.',
                form: {
                    name: {
                        label: 'Nome',
                        placeholder: 'Qual o seu nome?'
                    },
                    email: {
                        label: 'Email',
                        placeholder: 'Qual o seu email?'
                    },
                    message: {
                        label: 'Mensagem',
                        placeholder: 'O que gostaria de dizer?'
                    },
                    send: {
                        message: 'Enviar',
                        loading: 'Enviando...',
                    },
                    formSend: {
                        success: 'Obrigado! Eu responderei assim que possível.',
                        error: 'Desculpe! Alguma coisa deu errado.'
                    }
                }
            },
            footer: {
                backToTop: 'Voltar ao Topo',
            }
        }
    }
};

export { messages };