import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  orecal,
  shopify,
  carrent,
  tripguide,
  E_voting,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [ // ✅ Correct declaration
    {
      title: "Front-End Development",
      companyName: "Meta",
      icon: meta,
      iconBg: "#ffffff",
      date: "Jan 16, 2025",
      points: [
        "Distinguish between front-end, back-end, and full-stack developers.",
        "Create and style a webpage with HTML and CSS.",
        "The benefits of working with UI frameworks.",
      ],
      link: "https://coursera.org/verify/63PUTY67MU1D",  
    },  
    {
      title: "Back-End Development",
      companyName: "Meta",
      icon: meta,
      iconBg: "#ffffff",
      date: "Jan 18, 2025",
      points: [
        "Distinguish between front-end, back-end, and full-stack developers.",
        "Create and style a webpage with HTML and CSS.",
        "The benefits of working with UI frameworks.",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/63PUTY67MU1D",  
    },
    {
      title: "Agile Project Management",
      companyName: "Google",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Jan 14, 2025",
      points: [
        "Explain the Agile project management approach and philosophy, including values and principles.",
        "Discuss the pillars of Scrum and how they support Scrum values.",
        "Describe the five important Scrum events and how to set up each event for a Scrum team.",
        "Explain how to coach an Agile team and help them overcome challenges.",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/1LZBHBVXB432",  
    },
    {
      title: "Oracle AI Associate",
      companyName: "Oracle",
      icon: orecal,
      iconBg: "#ffffff",
      date: "Aug 26, 2025",
      points: [
  "Understand foundational concepts of AI, ML, and deep learning including neural network architectures like CNNs, RNNs, and LSTMs.",
  "Explore supervised and unsupervised learning techniques for real-world applications.",
  "Gain proficiency in Oracle Cloud Infrastructure's AI and ML services portfolio.",
  "Discover generative AI and large language models for business automation and innovation.",
  "Learn to implement OCI AI solutions including Generative AI and Oracle 23ai with Select AI capabilities.",
      ],
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8784E24D3B1D846A7CFA34DA42D5AB1C6270477AAF8947010605ABACE9367402#",  
    },
  ];
  

const testimonials: TTestimonial[] = [
  
];


const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    previewLink: "https://github.com/",
  },
  {
    name: "E-Voting System",
    description:
      "A secure and transparent web-based electronic voting system that allows users to cast votes online with privacy and verifiability, ensuring election integrity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: E_voting,
    sourceCodeLink: "https://github.com/alokpratapjadon/E-Voting-System",
    previewLink: "https://github.com/alokpratapjadon/E-Voting-System",
  },
  {
    name: "Eventra",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    previewLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
