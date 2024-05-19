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





export const experiences_en = [
    {
        title: "Work/Study training program",
        company_name: "Safran Helicoptere Engines",
        icon: safran,
        iconBg: "#fbc3bc",
        date: "October 2023 - Today",
        points: [
            "Developper Angular on internal applications.",
            "Tools Management and with the engine calculator.",
            "Creation of GUI and HMI.",
        ],
    },
    {
        title: "3 months internship",
        company_name: "Octopeek part of Mazars",
        icon: octopeek,
        iconBg: "#fbc3bc",
        date: "April 2023 - July 2023",
        points: [
            "Creation of a project with AI.",
            "Data recovery and processing using Python, Talend and PowerBI.",
            "Data analysis on the explainability of sports performance (swimming and canoeing).",
            "Liaison between top-level sportsmen and women and experts in the field of AI."
        ]   
    },
    {
        title: "Web developer (Service provider)",
        company_name: "Hermes",
        icon: hermes,
        iconBg: "#fbc3bc",
        date: "April 2023 - July2023",
        points: [
            "Web developer for an internal application.",
            "Migration of an app from an AS400 server to PHPsymfony.",
            "Implementation of service and responsivity.",
            "Participation in the code review and contribution of a new point of view on the project."
        ],
    },
    {
        title: "Coaching Canoe-kayak slalom",
        company_name: "FreeLance",
        icon: kazzle,
        iconBg: "#accbe1",
        date: "March 2023 - April 2023",
        points: [
            "1 months of coaching for the national Canadian u18 team.",
            "New experience, development of my analytical and teaching skills.",
            "Sharing knowledge and challenging switching side (athlete to coach) to get a new point of view on the training."
        ],
    },

    {
        title: "Setting up a micro-business / self-employed person ",
        company_name: "Kazzle",
        icon: kazzle,
        iconBg: "#fbc3bc",
        date: "February 2023",
        points: [
            "For some of my personal projects.",
            "To be able to provide services (make a bit of money).",
            "To be able to work and learn through innovative projects.",
        ],
    },
    {
        title: "HighSchool",
        company_name: "Lycée Grandmont",
        icon: grandmont,
        iconBg: "#a2d2ff",
        date: "September 2017 - June 2020",
        points: [
            "3 years in a sports class with a modified timetable.",
            "Start of the professional-sporting double curcus.",
            "Baccalauréat Scientific specialising in Biology, passed with distinction.",
        ],
    },
    {
        title: "2 weeks intership",
        company_name: "Scaleway",
        icon: scaleway,
        iconBg: "#a2d2ff",
        date: "November 2016 - December 2016",
        points: [
            "Observation internship in Paris, first steps in the business world in a sector I'm passionate about, IT.",
            "I've been lucky enough to have had my hands in everything, from developers to data centre rack technicians and marketing.",
            "So I was able to learn the basics of how certain computer points work.",
        ],
    }
// last one 
];

//projects_en
export const projectsen = [
    // add project state : in progress, done, thinking or elaboration
    {
        iconUrl: tailwind, //pricewise
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker en',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: tailwind, //pricewise
        // iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone en',
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
    }
];

export const sport_en = [

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
