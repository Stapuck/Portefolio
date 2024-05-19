import {
    meta,
    shopify,
    starbucks,
    tesla, 
    safran, 
    octopeek, 
    hermes, 
    kazzle, 
    scaleway, 
    grandmont
} from "../assets";

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


// enlever les sources qui ne sont pas utiliser (même les sup du dossier asset)


// renommer le fichier index en index-fr.js et bien faire le changement partout. 

// School 



//Sport 





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


export const experiences_fr = [
    {
        title: "Alternance IHM",
        company_name: "Safran Hélicoptère Engines",
        icon: safran,
        iconBg: "#fbc3bc",
        date: "Octobre 2023 - Aujourd'hui",
        points: [
            "Développeur Angular sur application interne.",
            "Gestion Outillage et Interaction avec Calculateur.",
            "Création d'IHM.",
        ],
    },
    {
        title: "Stage de 2e année",
        company_name: "Octopeek part of Mazars",
        icon: octopeek,
        iconBg: "#fbc3bc",
        date: "Avril 2023 - Julliet 2023",
        points: [
            "Création d'un projet d'avenir.",
            "Récupération et Traitement de donnée via python, Talend, PowerBI.",
            "Data analyse sur l'explicabilité de la performance sportive (natation et canoë-kayak).",
            "Liaison entre Sportif de haut niveau et expert du domaine de l'IA. "
        ],
    },
    {
        title: "Prestation de service",
        company_name: "Hermès",
        icon: hermes,
        iconBg: "#fbc3bc",
        date: "Avril 2023 - Julliet 2023",
        points: [
            "Développeur web sur application interne.",
            "Migration d'une app d'un serveur AS400 vers PHPsymfony.",
            "Implementation de service et du responsif.",
            "Participation au revue de code et apport d'un nouveau point de vue sur le projet.",
        ],
    },
    {
        title: "Coaching Canoe-kayak",
        company_name: "FreeLance",
        icon: kazzle,
        iconBg: "#accbe1",
        date: "Mars 2023 - Avril 2023",
        points: [
            "1 mois de Coaching de l'équipe national jeune du Canada.",
            "Nouvelle expérience, developpement de mes capacités d'analyse et de pédagogie.",
            "Partage de savoir et remise en question pour une évolution constante.",
        ],
    },

    {
        title: "Création d'une micro entreprise / Status Auto-entrepreneur",
        company_name: "Kazzle",
        icon: kazzle,
        iconBg: "#fbc3bc",
        date: "Février 2023",
        points: [
            "Pour certain de mes projets personels.",
            "Pour pouvoir faire de la prestation de service (faire un peu d'argent).",
            "Pour pouvoir travailler et engranger des connaissances via des projets inovants.",
        ],
    },
    {
        title: "Années Lycée ",
        company_name: "Lycée Grandmont",
        icon: grandmont,
        iconBg: "#a2d2ff",
        date: "Septembre 2017 - Juin 2020",
        points: [
            "3 ans en classe sportive avec emploie du temps aménagé.",
            "Début du double curcus professionnel-sportif.",
            "Bac S spécialité SVT reçu avec mention assez bien.",
        ],
    },
    {
        title: "Stage de 3e",
        company_name: "Scaleway",
        icon: scaleway,
        iconBg: "#a2d2ff",
        date: "Novembre 2016 - Décembre 2016",
        points: [
            "Stage d'observation sur Paris, premiers pas dans le monde de l'entreprise dans un secteur qui me passione, l'informatique.",
            "J'ai eu la chance de toucher à tout, du developpeur au technicien de baies en datacenter en passant par le marketing.",
            "J'ai donc pu y apprendre les premiers connaissances sur le fonctionnement de certains points informatiques.",
        ],
    }
// last one 
];

//projects_fr
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



export const sport_fr = [

    // TODO : 
    // drapeau du pays en icon

     // today
     {
        title: "Championnat du monde Sénior &  Qualification Olympique. ",
        company_name: "Londres",
        icon: starbucks, //drappeau
        iconBg: "#accbe1",
        date: "Septembre 2023",
        points: [
            "mettre le résultat avec le presbook.",
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



// gestion du site
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

export const quickview = [
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