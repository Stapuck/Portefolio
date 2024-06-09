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




export const next_date = [
    { 
        "lieu_fr": "Liptovsky Mikulas, Slovaquie", 
        "lieu_en": "Liptovsky Mikulas, Slovakia", 
        "date": "July 05, 2024 12:00", 
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
        "date": "September 11, 2024 12:00",
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
        "date": "September 19, 2024 12:00" ,
        "event_en" : "WC",
        "event_fr" : "Coupe du monde",
        "live_result" : "link1",
        "live_video" : "link2",
        "bibs" : "18",
        "start" : "12h15"
    },
    // { 
    //     "lieu_fr": "Paris, France",
    //     "lieu_en": "Paris, France",
    //     "date": "May 13, 2024 21:55",
    //     "event_en" : "OG" ,
    //     "event_fr" : "JO",
    //     "live_result" : "link",
    //     "live_video" : "link",
    //     "bibs" : "18",
    //     "start" : "12h15"
    // },
    { 
        "lieu_fr": "Cesi, Pau", 
        "lieu_en": "Cesi, Pau", 
        "date": "September 05, 2026 16:00", 
        "event_en" : "Graduation",
        "event_fr" : "diplome d'ingénieur",
        "live_result" : "link",
        "live_video" : "link",
        "bibs" : "00",
        "start" : "12h15"
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