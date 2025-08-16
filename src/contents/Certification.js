import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picCertExpress from '../assets/Certificate-Express.png'
import picCertJavaScript from '../assets/Certificate-JavaScript.png'
import picCertGithub from '../assets/Certificate-GitHub.png'
import picCertGithubCopilot from '../assets/GitHub Copilot_certificate.png'
import picCertPython from '../assets/python_basic_certificate.png'
export const data =[{
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
picture:[picCertExpress]

},
{
    date:"Aug 2023",
    title:"BMI & BMR Calculator",
    link:"https://github.com/BankThanomsup/bmr_bmi_calculator",
    materials:[
        {type : faGithub, link:"https://github.com/BankThanomsup/bmr_bmi_calculator"},
    ],
description:[
    "A responsive web application that calculates BMI and BMR using interactive forms, Bootstrap styling, and JavaScript to provide personalized health insights.",
],
skills:[

    ["HTML","Bootstrap","JavaScript"]
    
],
picture:[picCertJavaScript]
},

{
    date:"Jul 2023",
    title:"GitHub for Developer",
    link:"",
    materials:[
        
    ],
description:[
    "Master the essentials of Git and GitHub for developers. Learn version control and efficient collaboration for professional software development.",
],
skills:[

    ["Git"]
    
],
picture:[picCertGithub]
},
{
    date:" Mar 2025",
    title:"Prompt Engineering with GitHub Copilot",
    materials:[],
description:[
    "Completed Prompt Engineering with GitHub Copilot, learned to craft effective prompts and leverage AI tools to accelerate coding and problem-solving.",
],
skills:[
    ["Git","GitHub Copilot","Developer Tools"]
    
],
picture:[picCertGithubCopilot]
},

{
    date:" Aug 2025",
    title:"Certified Python Accomplishment",
    materials:[],
description:[
    "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes, Functions, and Error Handling.",
],
skills:[
    ["Python"]
    
],
picture:[picCertPython]
},

]

