import {
    meta,
    safran, 
    octopeek, 
    hermes, 
    kazzle, 
    scaleway, 
    grandmont,
    france,
    anglais,
    pologne,
    allemagne,
    slovenie,
    italie,
    espagne,
    argentine,
    algerie,
    slovaquie,
    japon
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

export const sport_fr = [
     // today
     {
        title: "Qualification Olympique Continental pourParis 2024. ",
        company_name: "Saint-Suzanne, la Réunion",
        icon: france, 
        iconBg: "#accbe1",
        date: "Février 2024",
        points: [
            "4e de la qualification.",
            "mais classement final 13e pas de final donc pas qualifié.",
            "ça reste une très belle expériences et également la premiere opportunité que j'ai eu pour m'entrainer au chaud durant le froid hivernal de la métropole. "
        ],
    },
    {
        title: "Championnat du monde Sénior &  Qualification Olympique pour Paris 2024. ",
        company_name: "Londres, Angleterre",
        icon: anglais, 
        iconBg: "#accbe1",
        date: "Septembre 2023",
        points: [
            "Dernière compétition de la saison 2023 pour moi et je finis sur une 50e place, mitigé sur ce résultat.",
            "Je ne me qualifie donc pas pour les Jeux de Paris.",
        ],
    },
    {
        title: "Championnat du monde U23",
        company_name: "Cracovie, Pologne",
        icon: pologne,
        iconBg: "#accbe1",
        date: "Août 2023",
        points: [
            "pas de demi-finale cette année, une 36e place du à de grosses erreurs.",
            "Je repars donc de ces championnats du monde avec des points à revoir pour la suite.",
        ],
    },
    {
        title: "Championnat du monde Sénior",
        company_name: "Augsburg, Allemagne",
        icon: allemagne,
        iconBg: "#accbe1",
        date: "Juillet 2022",
        points: [
            "résultat final : 40e sur 67.",
            "Augsburg est un bassin particulièrement technique. "
        ],
    },
    {
        title: "Championnat du monde U23",
        company_name: "Ivrea, Italie",
        icon: italie,
        iconBg: "#accbe1",
        date: "Juillet 2022",
        points: [
            "resultat final : une 15e place en demi final.",
            "une petit erreur qui m'éloigne de la final mais de bon progrès et du travail pour la suite.",
        ],
    },
    {
        title: "Championnat du monde U23 ",
        company_name: "LJUBLJANA-TACEN, Slovénie",
        icon: slovenie,
        iconBg: "#accbe1",
        date: "Juillet 2021",
        points: [
            "resultat final : une 19e place en demi final, sans coach et sans structure.",
            "j'ai malheureusement pas eu de coach sur cette échéance mais un bon résultat malgré ça.",
        ],
    },
    // covid
    {
        title: "Olympique Test Event ",
        company_name: "Tokyo, Japon",
        icon: japon,
        iconBg: "#accbe1",
        date: "Novembre 2019",
        points: [
            "Pas qualifié pour les Jeux Olympique mais une occasion en or pour faire cette répétition générale.",
            "Participation à 2 courses avec le top mondial du canoe slalom.",
        ],
    },
    {
        title: "Championnat du monde Sénior et qualification Olympique pour Tokyo 2021",
        company_name: "Seu d'Urgell, Espagne",
        icon: espagne,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2019",
        points: [
            "Résultat final : 43e sur 56",
            "Pas qualification pour les jeux de Tokyo.",
            "Mais ce type d'échec, sert à mieux rebondir pour la suite."
        ],
    },
    {
        title: "Jeux Olympique de la jeunesse",
        company_name: "Buenos Aires, Argentine",
        icon: argentine,
        iconBg: "#accbe1",
        date: "Septembre - Octobre 2018",
        points: [
            "Médail d'or en Slalom.",
            "Victoire avec 5 sec d'avance.",
            "Titre de Champion Olympique de la jeunesse 2018."
        ],
    },
    {
        title: "Championnat d'Afrique u18 ",
        company_name: "Alger, Algerie",
        icon: algerie,
        iconBg: "#fbc3bc",
        date: "Juillet 2018",
        points: [
            "2 médaille, Or en slalom et Bronze en course en ligne.",
            "premiere expérience et confrontation avec les pagaieurs du continent africain."
        ],
    },
    {
        title: "Championnat du monde Junior",
        company_name: "Bratislava, Slovaquie",
        icon: slovaquie,
        iconBg: "#b7e4c7",
        date: "Juillet 2017",
        points: [
            "1er compétition international.",
            "Sur-classé de 2 ans car j'étais trop jeune (15ans) et je concourais contre des athlètes de 17 ans.",
            "j'ai donc fini 33e sur64, à 3 place de la demie-final donc pas trop mal."
        ],
    },
    {
        title: "Début dans le kayak ",
        company_name: "Val d'indre Canoe-Kayak, Veigné ",
        icon: france,
        iconBg: "#a2d2ff",
        date: "Avril 2009",
        points: [
            "Après avoir essayer plein d'autre sport, cette date représente le début d'une aventure toujours en cours.",
            "Et c'est sans le savoir que je me lance et intègre cette belle grande famille qu'est le slalom."
        ],
    },
];

// a faire 
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








// gestion du site à mettre dans le global : 
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

export const next_date = [
    { 
        "lieu_fr": "Liptovsky Mikulas, Slovaquie", 
        "lieu_en": "Liptovsky Mikulas, Slovakia", 
        "date": "May 19, 2024 20:40", 
        "event_en" : "WorldChampionship U23",
        "event_fr" : "Championnat du monde U23",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
     },
    { 
        "lieu_fr": "Ivrea, Italie",
        "lieu_en": "Ivrea, Italy",
        "date": "May 31, 2024 21:52",
        "event_en" : "WC",
        "event_fr" : "Coupe du monde",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    },
    { 
        "lieu_fr": "Seu d'Urgell, Espagne",
        "lieu_en": "Seu d'Urgell, Spain",
        "date": "May 21, 2024 21:54" ,
        "event_en" : "WC",
        "event_fr" : "Coupe du monde",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    },
    { 
        "lieu_fr": "Paris, France",
        "lieu_en": "Paris, France",
        "date": "May 13, 2024 21:55",
        "event_en" : "OG" ,
        "event_fr" : "JO",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "18",
        "start" : "12h15"
    }
];



// a refaire 
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