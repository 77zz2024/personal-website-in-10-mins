import { Configs } from "~/types/configTypes";

const configs: Configs = {
  name: "Ziqin Wu",
  homePagePictureFileName: "avatar.png",
  pages: ["about", "experience", "skills", "projects", "footprints"],
  colors: {
    primary: "#FFF9F2",
    background: "#E9E1E8",
  },
  navBar: {
    socialMediaLinks: {
      email: "zoe19970130@gmail.com",
      facebook: "",
      x: "",
      github: "https://github.com/player-eric/personal-website-in-10-mins",
      instagram: "https://www.instagram.com/whl9656?igsh=MXJyMGR5NjB5emkxcA%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/zoe-wuziqin/",
    },
  },
  aboutPage: {
    greeting: "Zoe (Ziqin) Wu",
    content: `
      •	Master of Science in Computer Science, Georgia Institute of Technology
      •	Master of Science in Mathematic Finance, Washington University in Saint Louis
      •	Lead Data Science Analyst at Discover Financial Services
      •	Seeking full time 0-3 years software engineer roles.
      `,
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "Georgia Institute of Technology",
          Major: 'Computer Science',
          date: "2023-2025",
          location: "Atlanta, GA",
          content: `
          master's degree in Computer Science. 
          `,
        },
        {
          title: "Washington University in Saint Louis",
          date: "2019-2021",
          location: "Saint Louis, MO",
          content: `master's degree in Mathematic Finance.`,
        },
      ],
    },
    {
      sectionName: "Work",
      items: [
        {
          title: "Lead Data Science Analyst, Discover Financial Services",
          date: "Nov. 2021 – Present",
          content: `
            •	Led the development and maintenance of three Python-based automation tools, cutting the finance department’s monthly planning time by 40% and reducing errors by 60%
            •	Followed multiple design patterns (Factory, Decorator, Iterator) for code readability, modularity, and maintainability
            •	Conducted automated Unit/End to End tests with treasury team using Pytest and Mock, achieving 90% code coverage
            •	Connected to a highly scalable, secure, and efficient Snowflake cloud database to store the data of the application
            •	Built 10+ Tableau dashboards to visualize the planning metrics in real-time for management review and decision-making
            •	Worked with the BT team to deploy the applications on the AWS Air9 platform (EC2), improving scalability and efficiency
            •	Optimized the queries (SQL) behind the dashboards to slash the query time by 50% and reduce customer complaints; consistently ranked 1st in dashboard views (5000+ monthly)
            •	Collaborated in an Agile team as a scrum master; utilized GitHub/Git for version control and repositories management
            •	Won the North Star Award once, and was nominated for the President’s Award each year among the whole company
          `,
        },
        {
          title: "Data Analyst, Native Pet",
          date: "Aug. 2021 – Nov. 2021",
          content: `
            •	Built a Python tool (MySQL, Matplotlib) to automate the monitoring & reporting process, slashing manual workload by 80%
            •	The process included extracting the data from Amazon Seller API, data cleaning, KPI calculating (SQL), and data loading
            •	Leveraged CSS and Bootstrap to style the company’s website, featuring a streamlined and consistent user experience; achieved a 30% increase in click-through rate and 35% in time on page
          `,
        },
      ],
    },
  ],
  skillsPage: [
    {
      name: "Python",
      iconFileName: "python.svg",
    },
    {
      name: "Java",
      iconFileName: "java-original.svg",
    },
    {
      name: "JavaScript",
      iconFileName: "javascript-js.svg",
    },
    {
      name: "React",
      iconFileName: "react.svg",
    },
    {
      name: "SQL",
      iconFileName: "sql.png",
    },
    {
      name: "Spring Boot",
    },
    {
      name: "C/C++",
    },
    {
      name: "NoSQL",
    },
    {
      name: "Docker",
    },
    {
      name: "RESTful API",
    },
  ],
  projectsPage: [
    {
      title: "FLASK REST API",
      description:
        "• Engineered a scalable and reliable REST API (Flask) for stores management; deployed on Render.com via a Docker container • Enabled secure user registration, authentication, and token refresh for a seamless experience via Flask-JWT-Extended • Connected to a PostgreSQL backend database; leveraged SQLAlchemy for Object-Relational Mapping (ORM) • Used task queues (rq) and background worker for email sending to improve scalability; used Marshmallow for Data Validation • Fully tested the API using Postman and automatically generated an interactive API documentation using Swagger",
      description2: "test",
      skills: "REST API (Flask), Docker, JWT, PostgreSQL, SQLAlchemy, ORM, task queues (rq), Marshmallow, Postman, Swagger",
    },
    {
      title: "MULTITHREADED FILE TRANSFER CLIENT AND SERVER",
      description:
        "• Established a high-performance multithreaded file transfer client-server system in C language using Pthread and TCP socket • Implemented the Boss-Worker pattern of multithreading on both the client and server; used mutex to avoid race condition • Utilized an AWS EC2 instance (Linux Ubuntu) for developing and testing; used debuggers (Valgrind and GDB) to detect errors",
      skills: "C, Pthread, TCP Socket, AWS",
    },
    {
      title: "REACT TO-DO LIST APP",
      description:
        "• Built a user-friendly React-based to-do list web application, featuring real-time updates and seamless CRUD operations • Developed the front-end web pages with React Framework and JavaScript; leveraged CSS and Bootstrap for styling • Used Spring Boot to build a backend REST API for the application and connected it to a MongoDB database for persistence • Tested the API using Postman; hosted the web application on GitHub and Docker, increasing accessibility to users",
      skills: "React, JavaScript, CSS, Bootstrap, Spring Boot, MongoDB",
    },
  ],
};

export default configs;
