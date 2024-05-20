import {
    safran, 
    octopeek, 
    hermes, 
    kazzle, 
    scaleway, 
    grandmont,


    france,
    anglais,
    algerie,
    allemagne,
    argentine,
    espagne,
    italie,
    japon, 
    pologne,
    slovaquie,
    slovenie

} from "../assets";

// pour les experiences
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

//à faire 
export const projects_en = [
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
    // today
    {
       title: "Continental Olympic Qualification to Paris 2024. ",
       company_name: "Saint-Suzanne, la Réunion",
       icon: france, 
       iconBg: "#accbe1",
       date: "February 2024",
       points: [
           "4th in heat.",
           "but final ranking is 13th,didn't go throught semi-final, no final so not qualified.",
           "It was a great experience and the first opportunity I'd had to train in the warmth of a cold metropolitan winter."
       ],
   },
   {
       title: "Worldchampionship Senior & Olympic Qualification to Paris 2024. ",
       company_name: "London, England",
       icon: anglais, 
       iconBg: "#accbe1",
       date: "September 2023",
       points: [
           "Last competition of the 2023 season and I finished in 50th place, with mixed feelings about this result.",
           "So I won't be qualifying for the Paris Games."
       ],
   },
   {
       title: "Worldchampionship U23",
       company_name: "Krakow, Poland",
       icon: pologne,
       iconBg: "#accbe1",
       date: "August 2023",
       points: [
           "No semi-final this year, 36th place due to some big mistakes.",
           "So I'm leaving these world championships with a few points to revisit for the future."
       ],
   },
   {
       title: "Worldchampionship Senior",
       company_name: "Augsburg, Germany",
       icon: allemagne,
       iconBg: "#accbe1",
       date: "July 2022",
       points: [
           "Final result: 40th out of 67.",
           "Augsburg is a particularly technical course."
       ],
   },
   {
       title: "Worldchampionship U23",
       company_name: "Ivrea, Italy",
       icon: italie,
       iconBg: "#accbe1",
       date: "July 2022",
       points: [
           "Final result: 15th place in the semi-finals.",
           "A small error that took me away from the final but good progress and work for the future.",
       ],
   },
   {
       title: "Worldchampionship U23 ",
       company_name: "Ljubljana-Tacen, Slovenia",
       icon: slovenie,
       iconBg: "#accbe1",
       date: "July 2021",
       points: [
           "Final result: 19th place in the semi-finals.",
           "Unfortunately I didn't have a coach for this event, but it was a good result despite that.",
       ],
   },
   // covid
   {
       title: "Olympic Test Event ",
       company_name: "Tokyo, Japan",
       icon: japon,
       iconBg: "#accbe1",
       date: "November 2019",
       points: [
           "I didn't get the qualification for the Olympic Games but a golden opportunity to do this dress rehearsal.",
           "Participation of 2 races with the world's top slalom paddler.",
       ],
   },
   {
       title: " Worldchampionship Senior and Olympic qualification for Tokyo 2021",
       company_name: "Seu d'Urgell, Spain",
       icon: espagne,
       iconBg: "#accbe1",
       date: "September - October 2019",
       points: [
           "Final result: 43rd out of 56.",
           "No qualification for the Tokyo games.",
           "But this type of failure is a good way of bouncing back for the future."
       ],
   },
   {
       title: "Young Olympic Games",
       company_name: "Buenos Aires, Argentina",
       icon: argentine,
       iconBg: "#accbe1",
       date: "September - October 2018",
       points: [
           "Gold medal in Slalom.",
           "Victory by 5 seconds.",
           "Title of Youth Olympic Champion 2018."
       ],
   },
   {
       title: "Africa Championship u18 ",
       company_name: "Alger, Algeria",
       icon: algerie,
       iconBg: "#fbc3bc",
       date: "July 2018",
       points: [
           "2 medals, Gold in  slalom and Bronze in sprint.",
           "First experience and confrontation with paddlers from the African continent."
       ],
   },
   {
       title: "Worldchampionship Junior",
       company_name: "Bratislava, Slovakia",
       icon: slovaquie,
       iconBg: "#b7e4c7",
       date: "July 2017",
       points: [
           "1st international event.",
           "I was over-classified by 2 years because I was too young (15) and I was competing against 17-year-old athletes.",
           "So I finished 33rd out of 64, 3 places out of the semi-final, so not too bad."
       ],
   },
   {
       title: "First Step in a boat ",
       company_name: "Val d'indre Canoe-Kayak, Veigné ",
       icon: france,
       iconBg: "#a2d2ff",
       date: "April 2009",
       points: [
           "After having tried many other sports, this date represents the start of an ongoing adventure.",
           "Without knowing it, I took the plunge and joined the great family of slalom."
        ],
    },
];

