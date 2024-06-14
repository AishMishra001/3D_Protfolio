import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  api,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  innotech,
  gssoc,
  devs,
  firepay,
  FirePay,
  threejs,
  recoil,
  express,
  github,
  Restfulapi,
  FoodandWellness,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Recoil",
    icon: recoil,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "api",
    icon: api,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "100xdev",
    icon: devs,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - July 2024",
    points: [
      "Start learning Mern stack around still Time",
      "Learned and create mini projects around frontend devs using Javascript , tailwind UI and React",
      "Getting start with backend technologies like Nodejs , expressjs" , 
      "Become handly with using MongoDB database"
    ],
  },
  {
    title: "Video Editing and Organizing",
    company_name: "Innotech 2024",
    icon: innotech,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Designed and Created effective videos to promote Innotech ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
    ],
  },
  {
    title: "Contributor",
    company_name: "GSSOC 2024",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2024 - Till Now ",
    points: [
      "Got selected as a Contributor in Gssoc 2024 (GirlScript Summer of Code 2024)",
      "Currently contributing to a org named Xcedesign",
      "Collaborated with industry experts and tech enthusiast",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FirePay",
    company_name: "Self",
    icon: firepay,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Created my first Mern Stack application named FirePay",
      "Used frontend technologies : React + Tailwind",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Used Backend technologies : Node.js , Express.js , Mongodb , Mongoose session and Transaction",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FirePay",
    description: "FirePay is a user-friendly payments app that allows users to sign up securely using Zod-validated credentials stored in MongoDB. After signing up, users are redirected to a dashboard where they receive a random amount of dummy money (0-10,000 rupees). Users can view and share information with others on the platform, with data fetched directly from the database. The app also supports money transfers between users, with balances refreshed after each transaction.",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose transaction",
        color: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500",
      },
      {
        name: "personal-project",
        color: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-white",
      },
    ],
    image: FirePay,
    source_code_link: "https://github.com/AishMishra001/paytm",
  },
  {
    name: "Food and Wellness Synergy",
    description:
      " a personalized recipe suggestion system powered by Advanced Gemini LLMs and Flask. This innovative system allows users to receive customized recipe recommendations by providing food products through manual input, QR code-style entry, or image upload. Leveraging technologies like HTML, CSS, and Python, the platform offers an intuitive user interface and accurate recipe suggestions. Moving forward, I aim to enhance the system's capabilities with advanced AI models and new technologies, ensuring a continuously enriched culinary experience for users.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "group-project",
        color: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500",
      },
    ],
    image: FoodandWellness,
    source_code_link: "https://github.com/AishMishra001/Food-and-Wellness-Synergy",
  },
  {
    name: "RestFull API",
    description:
      "a beginner-friendly backend project that focuses on the basics of backend development by building a CRUD API with Node.js, Express, and MongoDB—essentially the MERN stack without React. This project covers fundamental concepts and practical skills, including the use of Postman, ThunderClient, and Insomnia for testing. Ideal for newcomers, it provides a solid foundation in backend development and API creation.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "personal-project",
        color: "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500",
      },
    ],
    image: Restfulapi,
    source_code_link: "https://github.com/AishMishra001/REST_ful-API-",
  },
];

export { services, technologies, experiences, testimonials, projects };