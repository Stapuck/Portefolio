import {  meta, shopify, starbucks, tesla } from "../assets";

import { css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    threejs,
} from "../assets";

import {
    logo,
    backend,
    creator,
    mobile,
    web,
    github,
    menu,
    close,
  
    carrent,
    jobit,
    tripguide,
} from "../assets";

// PDF 
import {
    CV_EN,
    CV_FR,
    PressBook,
    cvfr_pict,
    cven_pict,
    pressbook_pict,

} from '../assets'



export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: backend, //express
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: backend , //motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: backend , //mui
        name: "UX/UI",
        type: "Frontend",
    },
    {
        imageUrl: backend , //mui
        // imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: reactjs,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: backend, //sass
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwind,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];


export const experiences = [
    {
        title: "Alternance IHM",
        company_name: "Safran",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Octobre 2023 - Aujourd'hui",
        points: [
            "developpeur web sur application interne.",
            "gestion outillage et calculateur.",
            "reprendre les intitulés.",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Stage de 2e année",
        company_name: "Octopeek part of Mazars",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Avril 2023 - Julliet 2023",
        points: [
            "data analyse sur l'explicabilité de la performance sportive",
            "recuperation et traitement de donnée",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Prestation de service",
        company_name: "Hermès",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Avril 2023 - Julliet 2023",
        points: [
            "developpeur web sur application interne",
            "migration d'une app d'un serveur ????   vers PHPsymfony",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
    // pas sur de le mettre
        title: "Coaching Canoe-kayak",
        company_name: "",
        icon: starbucks,
        iconBg: "#accbe1", //#accbe1
        date: "Mars 2023 - Avril 2023",
        points: [
            "Coach pour 1 mois de l'équipe national jeune du canada",
            "tester de nouvelle chose / nouvelle expérience, developper ses capacité d'analyse",
            "être dans le partage de savoir et evolution constante",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Création d'une micro entreprise / Status Auto-entrepreneur",
        company_name: "Kazzle",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Février 2023",
        points: [
            "pour les projets perso",
            "pour pouvoir travailler et engranger des connaissances via des projets inovants.",
            "?? ",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Creation et direction d'une Association",
    //     company_name: "DODO Mauritius Team",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "2019",
    //     points: [
    //         "Association dont le but est le developpement du canoë-kayak en afrique.",
    //         "Ralenti par le covid et activité parallèle à mes occupation",
    //         // "Developing and maintaining web applications using React.js and other related technologies.",
    //         // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         // "Implementing responsive design and ensuring cross-browser compatibility.",
    //         // "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Années Lycée ",
        company_name: "Lycée Grandmont",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Septembre 2017 - Juillet 2020",
        points: [
            "Bac S mention assez bien",
            "revoir",
            "revoir",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Stage de 3e",
        company_name: "Scaleway",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Novembre 2016 - Décembre 2016",
        points: [
            "Stage d'observation sur Paris, premiers pas dans le monde de l'entreprise dans un secteur qui me passione, l'informatique.",
            "J'ai eu la chance de toucher à tout, du developpeur au siege social au technicien de baies en datacenter.",
            "J'ai donc pu y apprendre les premiers connaissances sur le fonctionnement de certains points informatique.",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
// last one 
];

export const projects = [
    // add project state : in progress, done, thinking or elaboration
    {
        iconUrl: tailwind, //pricewise
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: meta, //pricewise
        theme: 'btn-back-red',
        name: 'Personel portefolio',
        description: 'Portefolio',
        link: 'https://github.com/Stapuck/Portefolio',
    },
];

export const theme_options = [
    {
      icon:"sunny", 
      text:'light'
    },
    {
      icon:"moon", 
      text:'dark'
    }
];


export const sport = [

    // TODO : 
    // mettre logo du pays ou à eu lieu la course 
    // rajouter propriété lieu
    // poids des image à revoir
    // voir pour l'extension react des flags !!

     // today
     {
        title: "Championnat du monde Sénior & Olympique qualification",
        company_name: "Londres",
        icon: starbucks, //drappeau
        iconBg: "#accbe1",
        date: "Septembre 2023",
        points: [
            "pas qualifié",
            "prochaine étape la réunion ",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat du monde U23 ",
        company_name: "Ivrea",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Juillet 2022",
        points: [
            "15 place ( à revoir ) demi final  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat du monde U23 ",
        company_name: "Tacen",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Juillet 2021",
        points: [
            "14 place ( à revoir ) demi final  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // covid
    {
        title: "Olympique test event ",
        company_name: "Tokyo",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Novembre 2019",
        points: [
            "pas qualifié pour les jeux mais occasion en or pour faire cette repetition générale  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Olympique qualification ",
        company_name: "Seu d'urgel",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2019",
        points: [
            "pas qualifié ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Jeux Olympique de la jeunesse",
        company_name: "Buenos Aires ",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2018",
        points: [
            "medail d'or en Slalom",
            "victoire avec 5 sec d'avance ",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat d'Afrique u18 ",
        company_name: "Alger",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Juillet 2018",
        points: [
            "double medail or en slalom et bronze en course en ligne ",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "1er Compétition international ",
        company_name: "Championnat du monde Junior Bratislava",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Juillet 2017",
        points: [
            "sur classé de 2 ans  15 et j'étais contre des 17 ans",
           
        ],
    },
    {
        title: "Début dans le kayak ",
        company_name: "Val d'indre Canoe-Kayak, Veigné ",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Mars 2009",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

//revoir si on l'enleve ( je pense que la vidéo empeche le chargement de la timeline sport )
export const sporten = [

    // TODO : 
    // mettre logo du pays ou à eu lieu la course 
    // rajouter propriété lieu
    // poids des image à revoir
    // voir pour l'extension react des flags !!

     // today
     {
        title: "WorldChampionship & Olympic qualification ",
        company_name: "Londres",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Septembre 2023",
        points: [
            "pas qualifié",
            "prochaine étape la réunion ",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat du monde U23 ",
        company_name: "Ivrea",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Juillet 2022",
        points: [
            "15 place ( à revoir ) demi final  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat du monde U23 ",
        company_name: "Tacen",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Juillet 2021",
        points: [
            "14 place ( à revoir ) demi final  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // covid
    {
        title: "Olympique test event ",
        company_name: "Tokyo",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Novembre 2019",
        points: [
            "pas qualifié pour les jeux mais occasion en or pour faire cette repetition générale  ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Olympique qualification ",
        company_name: "Seu d'urgel",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2019",
        points: [
            "pas qualifié ",
            "",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Jeux Olympique de la jeunesse",
        company_name: "Buenos Aires ",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2018",
        points: [
            "medail d'or en Slalom",
            "victoire avec 5 sec d'avance ",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Championnat d'Afrique u18 ",
        company_name: "Alger",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Juillet 2018",
        points: [
            "double medail or en slalom et bronze en course en ligne ",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "1er Compétition international ",
        company_name: "Championnat du monde Junior Bratislava",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Juillet 2017",
        points: [
            "sur classé de 2 ans  15 et j'étais contre des 17 ans",
           
        ],
    },
    {
        title: "Début dans le kayak ",
        company_name: "Val d'indre Canoe-Kayak, Veigné ",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Mars 2009",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];
// sup compétition
export const competitions = [
    {
        title: "Test 1",
        type: "championnat du monde",
        // startdate: "March 2020",
        date: "05-01-2024",
        place: "FRA",
        done: true, 
        result: "3"

    },
    {
        title: "Test 2",
        type: "coupe du monde",
        // startdate: "March 2021",
        date: "07-01-2024",
        place: "FRA",
        done: true, 
        result: "12"

    },
    {
        title: "Test 2",
        type: "coupe du monde",
        // startdate: "March 2021",
        date: "16-01-2024",
        place: "FRA",
        done: false, 
        result: "Prochainnement"

    },
]

export const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
      dir: 'ltr'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      dir: 'ltr'
    },
    // {
    //   code: 'ar',
    //   name: 'Arabic',
    //   country_code: 'sa',
    //   dir: 'rtl'
    // }
];

export const quickview = [
// lg to show the doc depending of the language
// 1 is fr, 2 is en and 3 is both

    {
        title: "Curriculum vitae EN",
        pdf: CV_EN,
        image: cven_pict, 
        bgcolor: "bg-blue-100",
        darkbgcolor : "bg-red-600",
        lg: "en",

    },
    {
        title: "Curriculum vitae FR",
        pdf: CV_FR,
        image: cvfr_pict, 
        bgcolor: "bg-blue-300/85",
        darkbgcolor : "bg-blue-400/75",
        lg: "fr",

    },
    {
        title: "PressBook",
        pdf: PressBook,
        image: pressbook_pict, 
        bgcolor: "bg-orange-400",
        darkbgcolor : "bg-red-600",
        lg: "all",

    },
   
    
];



export const next_date = [
    { 
        "lieu": "Mikulas ", 
        "date": "May 15, 2024 21:31", 
        "event" : "WorldChampionship",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
     },
    { 
        "lieu": "Ivrea",
        "date": "May 14, 2024 21:52",
        "event" : "WC",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    },
    { 
        "lieu": "Seu",
        "date": "May 14, 2024 21:54" ,
        "event" : "WC",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    },
    { 
        "lieu": "Paris",
        "date": "May 13, 2024 21:55",
        "event" : "OG" ,
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    }
];
