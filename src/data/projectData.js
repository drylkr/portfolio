// src/data/projectData.js
// GridStats
import grid1 from "../assets/grid-1.png";
import grid2 from "../assets/grid-2.png";
import grid3 from "../assets/grid-3.png";
import grid4 from "../assets/grid-4.png";
import grid5 from "../assets/grid-5.png";
import grid6 from "../assets/grid-6.png";
import grid7 from "../assets/grid-7.png";

// Finance Tracker
import finance1 from "../assets/finance-dash.png";
import finance2 from "../assets/finance-transact.png";
import finance3 from "../assets/finance-set.png";

// Spotify Tracker
import spotify1 from "../assets/spotify-1.png";
import spotify2 from "../assets/spotify-2.png";
import spotify3 from "../assets/spotify-3.png";
import spotify4 from "../assets/spotify-4.png";
import spotify5 from "../assets/spotify-5.png";

// Inventory System
import user1 from "../assets/user-1.jpeg";
import user2 from "../assets/user-2.jpeg";
import user3 from "../assets/user-3.jpeg";
import admin1 from "../assets/admin-1.jpeg";
import admin2 from "../assets/admin-2.jpeg";
import admin3 from "../assets/admin-3.jpeg";
import admin4 from "../assets/admin-4.jpeg";
import admin5 from "../assets/admin-5.jpeg";
import admin6 from "../assets/admin-6.jpeg";
import admin7 from "../assets/admin-7.jpeg";
import staff1 from "../assets/staff-1.jpeg";
import staff2 from "../assets/staff-2.jpeg";
import staff3 from "../assets/staff-3.jpeg";
import staff4 from "../assets/staff-4.jpeg";
import staff5 from "../assets/staff-5.jpeg";
import staff6 from "../assets/staff-6.jpeg";
import staff7 from "../assets/staff-7.jpeg";

// Delivery Tracking
import delivery1 from "../assets/delivery-1.jpeg";
import delivery2 from "../assets/delivery-2.jpeg";
import delivery3 from "../assets/delivery-3.jpeg";
import delivery4 from "../assets/delivery-4.jpeg";
import delivery5 from "../assets/delivery-5.jpeg";
import delivery6 from "../assets/delivery-6.jpeg";
import delivery7 from "../assets/delivery-7.jpeg";
import delivery8 from "../assets/delivery-8.jpeg";
import delivery9 from "../assets/delivery-9.jpeg";

// Warehouse Access & Logging System
import fresh1 from "../assets/fresh-1.png";
import fresh2 from "../assets/fresh-2.png";
import fresh3 from "../assets/fresh-3.png";
import fresh4 from "../assets/fresh-4.png";
import fresh5 from "../assets/fresh-5.png";
import fresh6 from "../assets/fresh-6.png";
import fresh7 from "../assets/fresh-7.png";
import fresh8 from "../assets/fresh-8.png";
import fresh9 from "../assets/fresh-9.png";
import fresh10 from "../assets/fresh-10.png";
import fresh11 from "../assets/fresh-11.png";

// Lyfbiz
import lyf1 from "../assets/lyf-1.png";
import lyf2 from "../assets/lyf-2.png";
import lyf3 from "../assets/lyf-3.png";
import lyf4 from "../assets/lyf-4.png";
import lyf5 from "../assets/lyf-5.png";

// Book Catalog
import book1 from "../assets/book-1.jpeg";
import book2 from "../assets/book-2.jpeg";
import book3 from "../assets/book-3.jpeg";

// Audiometer
import audio1 from "../assets/audio-1.png";
import audio2 from "../assets/audio-2.png";
import audio3 from "../assets/audio-3.png";
import audio4 from "../assets/audio-4.png";
import audio5 from "../assets/audio-5.png";
import audio6 from "../assets/audio-6.png";
import audio7 from "../assets/audio-7.png";
import audio8 from "../assets/audio-8.png";
import audio9 from "../assets/audio-9.png";
import audio10 from "../assets/audio-10.png";
import audio11 from "../assets/audio-11.png";
import audio12 from "../assets/audio-12.png";

// PDF
import thesisPDF from "../assets/web-based-audiometer-thesis.pdf";

const projectData = {
  featured: [
    {
      title: "GridStats",
      description: "A modern SaaS landing page for GridStats, a Formula 1 fan hub focused on analytics. Features a clean, responsive design, built as a frontend-only project using React, Tailwind CSS, and shadcn components.",
      images: [grid1, grid2, grid3, grid4, grid5, grid6, grid7],
      github: "https://github.com/drylkr/grid-stats", 
      demo: "https://grid-stats.vercel.app/",
      tech: ["React.js", "Tailwind CSS", "shadcn/ui"],
      category: ["featured", "personal"]
    },
    {
      title: "Finance Tracker",
      description: "A full-stack finance dashboard that helps you track income, expenses, and investments.",
      images: [finance1, finance2, finance3],
      github: "https://github.com/drylkr/finance-tracker",
      demo: "https://finance-tracker-steel-alpha.vercel.app/",
      tech: ["React.js", "Material UI", "Firebase", "Node.js", "Express"],
      category: ["featured", "personal"]
    },
    {
      title: "Web-Based Audiometer System",
      description: "A thesis project developed as team lead for a web application that conducts hearing assessments using machine learning (Elastic Net Regression). Built with Django, vanilla HTML, CSS, JavaScript, and Python. The system includes user authentication, test administration, and result visualization. Achieved 84.76% accuracy in detecting mild hearing loss at key frequencies (250 Hz and 8000 Hz). Evaluated by audiometrists for reliability and ease of use.",
      images: [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12],
      github: "",
      demo: "", 
      document: thesisPDF, 
      documentName: "Read Thesis",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL", "Machine Learning"],
      category: ["featured", "academic"]
    }
  ],
  
  professional: [
    {
      title: "Lyfbiz Solutions Website",
      description: "A responsive WordPress landing page built for a startup, based on a Figma design. Implemented custom CSS and SEO enhancements. Collaborated with the graphics team and led a walkthrough session with stakeholders.",
      images: [lyf1, lyf2, lyf3, lyf4, lyf5],
      github: "", 
      demo: "https://lyfbizsolutions.com/", 
      tech: ["WordPress", "Figma", "CSS", "SEO"],
      category: "professional"
    },
    {
      title: "Inventory Management System",
      description: "Built the frontend of an inventory system freelance project based on wireframes. The interface supports three user roles: customers, staff, and admins. Developed using Vue.js and Bootstrap with minimal custom CSS.",
      images: [user1, user2, user3, admin1, admin2, admin3, admin4, admin5, admin6, admin7, staff1, staff2, staff3, staff4, staff5, staff6, staff7],
      github: "", 
      demo: "", 
      tech: ["Vue.js", "Bootstrap", "HTML", "CSS"],
      category: "professional"
    },
    {
      title: "Delivery Tracking System",
      description: "Developed the frontend of a delivery tracking system for a freelance project. Built an interface for three user roles: customers, riders, and admins. Integrated modals for interactive components. Built with Vue.js, Bootstrap, and custom CSS.",
      images: [delivery1, delivery2, delivery3, delivery4, delivery5, delivery6, delivery7, delivery8, delivery9],
      github: "",
      demo: "",
      tech: ["Vue.js", "Bootstrap", "HTML", "CSS"],
      category: "professional"
    },
    {
      title: "Warehouse Access & Logging System",
      description: "Developed as a freelance project, this is a warehouse access management system with user and admin roles. Users input a palette barcode to log entry and exit data, which is recorded and displayed in a transaction history dashboard. Admins can approve or reject new account requests, monitor real-time activity, and access extended history and dashboard functionalities.",
      images: [fresh1, fresh2, fresh3, fresh4, fresh5, fresh6, fresh7, fresh8, fresh9, fresh10, fresh11],
      github: "", 
      demo: "", 
      tech: ["Vue.js", "Bootstrap", "HTML", "CSS"],
      category: "professional"
    },
  ],
  
  personal: [
    {
      title: "Spotify Playlist Tracker",
      description: "A bot that tracks Spotify playlist changes and sends Telegram updates. Automatically runs via GitHub Actions.",
      images: [spotify1, spotify2, spotify3, spotify4, spotify5],
      github: "https://github.com/drylkr/spotifyBot",
      demo: "",
      tech: ["Node.js", "Spotify API", "Telegram API", "GitHub Actions"],
      category: "personal"
    }
  ],
  
  academic: [
    {
      title: "Book Catalog App",
      description: "Created a dynamic book catalog as part of a web developer exam, which I successfully passed. Built with PHP, MySQL, jQuery AJAX, and Bootstrap, the app supports full CRUD operations—add, edit, delete, and view books—without page reloads. The project followed a predefined UI and functional spec provided in the exam.",
      images: [book1, book2, book3],
      github: "https://github.com/drylkr/book-catalog", 
      demo: "", 
      tech: ["HTML", "CSS", "PHP", "MySQL", "jQuery", "AJAX", "Bootstrap"],
      category: "academic"
    }
  ]
};

const flatProjectData = [
  ...projectData.featured.map(project => ({
    ...project, 
    categories: project.category || [project.category || "featured"]
  })),
  ...projectData.professional.map(project => ({
    ...project, 
    categories: project.category || [project.category || "professional"]
  })),
  ...projectData.personal.map(project => ({
    ...project, 
    categories: project.category || [project.category || "personal"]
  })),
  ...projectData.academic.map(project => ({
    ...project, 
    categories: project.category || [project.category || "academic"]
  }))
];

export { projectData, flatProjectData };
export default flatProjectData;