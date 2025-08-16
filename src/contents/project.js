import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picBmiBmr from '../assets/PicBmiBmr.png'
import picExpress from "../assets/picExpress.png"
import PicCamping from "../assets/PicCamping.png"
export const data =[{
    date:"Aug 2023",
    title:"BMI & BMR Calculator",
    link:"https://bmr-bmi-calculator-9ys7g92ew-bankthanomsups-projects.vercel.app/",
    materials:[
        {type : faGithub, link:"https://github.com/BankThanomsup/bmr_bmi_calculator"},
    ],
description:[
    "This is a program I developed based on my personal needs. The objective is that when we exercise, knowing our BMI and BMR allows us to understand how much we should eat each day and whether our body condition is within a healthy range, whether we are overweight or underweight. This makes it easier to design workout plans. Therefore, I developed this program to meet these objectives.",
],
skills:[
    ["HTML","Bootstrap","JavaScript"]
],
picture:[picBmiBmr]

},

{
    date:"Oct 2024",
    title:"Web App Development with Node.js & Express",
    link:"https://github.com/BankThanomsup/Express-api",
    materials:[
        {type : faGithub, link:"https://github.com/BankThanomsup/Express-api"},
        {type : faYoutube, link:"https://www.youtube.com/watch?v=WQnXaqse-0c"},
    ],
description:[
    "Create an API for managing products in an inventory management system using Node.js and Express, with MongoDB as the database.",
],
skills:[
    ["HTML","CSS"],
    ["NodeJS","Express","MongoDB"]
    
],
picture:[picExpress]
},

{
    date:"Jul 2025",
    title:"React Camping Workshop",
    link:"https://github.com/BankThanomsup/Express-api",
    materials:[
        {type : faGithub, link:"https://github.com/BankThanomsup/React-camping-workshop"},
    ],
description:[
    "A comprehensive camping reservation web application built with React. Features include user authentication (login/logout), camping site booking system, payment processing, receipt printing functionality, and dynamic data filtering by categories. The application provides a complete booking experience from site selection to payment confirmation with responsive design and intuitive user interface.",
],
skills:[
    ["Vite","Tailwind CSS","Clerk","Zod","Zustand","Prisma","Mysql"],
    ["React","React Router","React Leaflet","State Management"]
],
picture:[PicCamping]
},

]

