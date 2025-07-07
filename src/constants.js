// profile
import profile1 from "./assets/profile1.jpg";

// company
import cantilever from "./assets/company/cantilever.png";

// education
import tenth from "./assets/education/10th.gif";
import college from "./assets/education/MAIT2.jpg";
import twelth from "./assets/education/unnamed.jpg";

// tech_logo
import css from "./assets/tech_logo/css.png";
import docker from "./assets/tech_logo/docker.png";
import eclipse from "./assets/tech_logo/eclipse.png";
import git from "./assets/tech_logo/git.png";
import github from "./assets/tech_logo/github.png";
import html from "./assets/tech_logo/html.png";
import intellij from "./assets/tech_logo/intellij.png";
import java from "./assets/tech_logo/java.png";
import javascript from "./assets/tech_logo/javascript.png";
import kafka from "./assets/tech_logo/kafka.png";
import mui from "./assets/tech_logo/materialui.png";
import mysql from "./assets/tech_logo/mysql.png";
import netlify from "./assets/tech_logo/netlify.png";
import postman from "./assets/tech_logo/postman.png";
import reactjs from "./assets/tech_logo/reactjs.png";
import redis2 from "./assets/tech_logo/redis.png";
import redux from "./assets/tech_logo/redux.png";
import routerdark from "./assets/tech_logo/rr_logo_dark.png";
import springboot from "./assets/tech_logo/springboot.png";
import tailwindcss from "./assets/tech_logo/tailwindcss.png";
import vscode from "./assets/tech_logo/vscode.png";

// projects images
import assembly1 from "./assets/projects/assembly1.png";
import recipe from "./assets/projects/recipe.png";
import snake from "./assets/projects/snake.png";
import tenzies from "./assets/projects/tenzies.png";
import blog from './assets/projects/blog.avif'
import chatapp from './assets/projects/chatapp.png'
import crypto from './assets/projects/crypto.png'
import ecommerce from './assets/projects/ecommerce.png'
import food from './assets/projects/food.webp'
import shoppingcart from './assets/projects/shoppingcart.jpg'
import sports from './assets/projects/sports.webp'

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: javascript },
      { name: "React JS", logo: reactjs },
      { name: "Redux", logo: redux },
      { name: "Tailwind CSS", logo: tailwindcss },
      { name: "Material UI", logo: mui },
      { name: "React router", logo: routerdark },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring boot", logo: springboot },
      { name: "MySQL", logo: mysql },
      { name: "Apache kafka", logo: kafka },
      { name: "Redis", logo: redis2 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: java },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "Docker", logo: docker },
      { name: "VS Code", logo: vscode },
      { name: "Postman", logo: postman },
      { name: "Netlify", logo: netlify },
      { name: "IntelliJ", logo: intellij },
      { name: "Eclipse", logo: eclipse },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cantilever,
    role: "Java Backend Developer",
    company: "Cantilever",
    date: "June 2025 - Present",
    desc: "Developed dynamic and scalable backend using the Java stack, handling both api and database development. Collaborated with cross-functional teams to build and implement RESTful APIs, and optimize application performance.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Java", "Spring boot", "MySQL", "Spring Security", "Redis"],
  },
  {
    id: 1,
    img: crypto,
    role: "Full Stack Developer (Self-Initiated)",
    company: "Crypto Trading App",
    date: "April 2025 - June 2025",
    desc: "Developed a full stack app using React.js and Spring boot that interacts with CoinGecko's public API to display live market data, token prices, and charts with filtering and sorting capabilities. Along with that user can trade coins, transfer money and watch coin history.",
    skills: ["JavaScript", "React JS", "Axios", "CoinGecko API", "Chart.js", "Tailwind CSS", "Java", "Spring boot", "MySql", "Spring Security"],
  },
  {
    id: 2,
    img: chatapp,
    role: "Full Stack Developer (Self-Initiated)",
    company: "Real-Time Chat App",
    date: "January 2025 - March 2025",
    desc: "Developed a real-time chat application with features like user authentication, message persistence, and WebSocket-based instant messaging. Used Spring Boot for backend, MySQL for storage, and React for the frontend. Deployed using Docker.",
    skills: ["Java", "Spring Boot", "WebSocket", "MySQL", "Redis", "React JS", "JWT", "Docker", "REST API"],
  },
];

export const education = [
  {
    id: 0,
    img: college,
    school: "MAIT College, Delhi",
    date: "Sept 2023 - Present",
    grade: "9.3 CGPA",
    desc: "I have completed my Btech Degree in Computer Science and Engineering from MAIT, Delhi. During my time at MAIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various technical events, which enhanced my skills and knowledge. My experience at MAIT has been instrumental in shaping my technical abilities and professional growth.",
  },
  {
    id: 1,
    img: twelth,
    school: "SCSD Sarvodaya School",
    date: "April 2021 - March 2022",
    grade: "92%",
    desc: "I completed my class 12 education from Saheed Captain Sanjeev Dahiya sarvodaya vidyalya, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  },
  {
    id: 2,
    img: tenth,
    school: "Bharat Shakti Public School, Delhi",
    date: "Apr 2019 - March 2020",
    grade: "90%",
    desc: "I completed my class 10 education from Bharat Shakti Public School, Delhi, under the CBSE board, where I studied Science and Maths.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Crypto Trading Platform",
    description:
      "A Full-stack application that provides real-time market data for cryptocurrencies and historical analysis. User can trade coins, check analysis and transfer money. Integrated with Coin-gecko APIs to display live price updates, charts, and asset details. Offers filtering, sorting, and a clean UI for fast analysis.",
    image: crypto,
    tags: ["React JS", "Java", "Spring boot", "JWT Auth", "JavaScript", "Tailwind CSS", "CoinGecko API", "Axios", "Chart.js"],
    github: "https://github.com/Devansh-ds/RealTimeTrading",
    webapp: "",
  },
  {
    id: 1,
    title: "TalkSync - Real-Time Chat App",
    description:
      "A full-stack real-time chat application built with Spring Boot and React.js. Supports secure JWT-based authentication, one-on-one and group chats, real-time messaging with WebSocket, delivery/read receipts, message persistence, and presence indicators. Designed to be responsive across devices.",
    image: chatapp,
    tags: ["Java", "Spring Boot", "WebSocket", "React JS", "MySQL", "JWT", "Spring Security", "Tailwind CSS"],
    github: "https://github.com/Devansh-ds/Chat-app",
    webapp: "",
  },
  {
    id: 2,
    title: "Sportigo - Sports betting backend",
    description:
      "Sportigo is a sports betting platform developed using Java and Spring Boot. It aims to provide users with a seamless experience in placing bets on various sports events. User can bet in various markets. It is a peer-to-peer betting application.",
    image: sports,
    tags: ["Java", "Spring Boot", "WebSocket", "React JS", "MySQL", "JWT", "Spring Security", "Tailwind CSS"],
    github: "https://github.com/Devansh-ds/Sportigo",
    webapp: "",
  },
  {
    id: 3,
    title: "BiteTrack – Food Delivery Backend",
    description:
      "The Online Food Ordering Backend is a Java Spring-boot based application that enables users to create restaurants, add food items with customizable ingredients, and place orders. The system includes role-based JWT authentication to manage user access securely. Customer can purchase customizable food with restaurant having order tracking",
    image: food,
    tags: ["Java", "Spring Boot", "MySQL", "JWT Auth", "Spring Security"],
    github: "https://github.com/Devansh-ds/FoodOrderOnline",
    webapp: "",
  },
  {
    id: 4,
    title: " ShopSwift – E-Commerce Microservice System",
    description:
      "A distributed e-commerce backend system built with Spring Boot microservices, supporting product listings, orders, payments, and customer notifications. Integrated with Eureka for service discovery, Spring Cloud Gateway as an API gateway, centralized config with Spring Cloud Config, and Apache Kafka for inter-service communication.",
    image: ecommerce,
    tags: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "MySQL", "Eureka", "API Gateway", "Docker", "Microservices"],
    github: "https://github.com/Devansh-ds/Backend_Projects/tree/main/E-Commerce",
    webapp: "",
  },
  {
    id: 5,
    title: "Blog Application",
    description:
      "A blog backend built with Spring Boot featuring JWT-based authentication, image upload with BLOB compression, and AI-powered blog summarization using Hugging Face. Includes full CRUD support, comment system, pagination, and RESTful API endpoints.",
    image: blog,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "WebClient", "REST API", "AI"],
    github: "https://github.com/Devansh-ds/BlogApplication",
    webapp: "",
  },
  {
    id: 6,
    title: "Shopping Cart – Monolithic Spring Boot Backend",
    description:
      "A backend-driven shopping cart system built with Spring Boot and MySQL. Supports full CRUD for products, categories, users, cart items, and orders. Designed with modularity for easy frontend integration. Includes product image handling and order tracking. Ideal for e-commerce and B2C platforms.",
    image: shoppingcart,
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST API", "Maven"],
    github: "https://github.com/Devansh-ds/Backend_Projects/tree/main/ShoppingCartProject",
    webapp: "",
  },
  {
    id: 7,
    title: "Assembly Endgame",
    description:
      "A React-based interactive word guessing game where users attempt to guess a hidden word letter by letter. The app provides feedback on correct and incorrect letters, and celebrates a win when the full word is correctly guessed. Designed with thematic UI, it offers a simple and engaging game experience for all ages.",
    image: assembly1,
    tags: ["HTML", "Tailwind CSS", "React", "Javascript"],
    github: "https://github.com/Devansh-ds/Frontend/tree/main/React/AssemblyEndgame",
    webapp: "https://assembly-endgame-ds.netlify.app",
  },
  {
    id: 8,
    title: "Tenzies Game",
    description:
      "A simple and addictive dice game built using React.js where the goal is to roll until all dice show the same number. Players can hold dice to keep their values and re-roll the rest. The game features a timer, roll counter, and confetti animation upon winning.",
    image: tenzies,
    tags: ["HTML", "Tailwind CSS", "React", "Javascript"],
    github: "https://github.com/Devansh-ds/Frontend/tree/main/React/TenziesGame",
    webapp: "https://tenzies-game-ds.netlify.app",
  },
  {
    id: 9,
    title: "Snake Game",
    description:
      "A recreation of the classic snake game, featuring pixel-style design, keyboard controls, and real-time movement. The snake grows as it eats food and the game ends on collision with walls or itself. Clean UI and the smooth gameplay loop.",

    image: snake,
    tags: ["HTML", "Tailwind CSS", "React", "Javascript"],
    github: "https://github.com/Devansh-ds/Frontend/tree/main/Projects/SnakeGame",
    webapp: "",
  },
];
