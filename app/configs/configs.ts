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
      github: "https://github.com/",
      instagram: "https://www.instagram.com/whl9656?igsh=MXJyMGR5NjB5emkxcA%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/zoe-wuziqin/",
    },
  },
  aboutPage: {
    greeting: "Zoe (Ziqin) Wu",
    content: [
      "Master of Science in Computer Science, Georgia Institute of Technology",
      "Master of Science in Mathematic Finance, Washington University in Saint Louis",
      "Application Engineer at Discover Financial Services",
      "Seeking mid-level software engineer roles with 3.5 years of experience",],
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "Georgia Institute of Technology",
          Major: 'Computer Science',
          date: "2023 - 2025",
          location: "Atlanta, GA, ",
          content: ["master's degree in Computer Science"],
        },
        {
          title: "Washington University in Saint Louis",
          date: "2019 - 2021",
          location: "Saint Louis, MO, ",
          content: ["master's degree in Mathematic Finance"],
        },
      ],
    },
    {
      sectionName: "Work",
      items: [
        {
          title: "Lead Data Science Analyst, Discover Financial Services",
          date: "Nov. 2021 – Present",
          content: [
            "Maintained highly scalable and distributed RESTful services (Spring Boot) for an enterprise database (Oracle/DB2) which is the single source of the company-wide business rules/parameters, serving 10k+ QPS",
            "Leveraged CI/CD (Jenkins) for deployment on AWS; used OCP for pod management and Nexus/SonarQube for code analysis",
            "Built a Frontend Website (React) for the services and created Datadog dashboards for continuous monitoring",
            "Developed a ServiceNow automation tool to facilitate the data change process requested by users, cutting 80% of manual effort",
            "Led the development and maintenance of three Python (Pandas, Numpy, OR-Tools) automation tools, cutting the finance department’s monthly planning time by 40% and reducing errors by 60%",
            "Conducted automated Unit/End to End tests with the treasury team using Pytest and Mock, achieving 90% code coverage",
            "Optimized the queries (SQL) behind to slash the query time by 50% and reduce customer complaints; consistently ranked 1st in dashboard views (5000+ monthly)",
            "Collaborated in an Agile team using Jira; utilized GitHub/Git for version control and repositories management",
            "Won the North Star Award once, and was nominated for the President’s Award each year among the whole company",],
        },
        {
          title: "Data Analyst, Native Pet",
          date: "Aug. 2021 – Nov. 2021",
          content: [
            "Built a Python tool (MySQL, Matplotlib) to automate the monitoring & reporting process, slashing manual workload by 80%",
            "The process included extracting the data from Amazon Seller API, data cleaning, KPI calculating (SQL), and data loading",
            "Leveraged CSS and Bootstrap to style the company’s website, featuring a streamlined and consistent user experience; achieved a 30% increase in click-through rate and 35% in time on page",],
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
      description: [
          "Built a scalable and reliable API (Flask) for store management, using Postman for testing and Swagger for documentation",
          "Enabled secure user registration, authentication, and token refresh for a seamless experience via Flask-JWT-Extended",
          "Connected to a PostgreSQL backend database; leveraged SQLAlchemy for Object-Relational Mapping (ORM)",
          "Used task queues (rq) and background worker for email sending to improve scalability; used Marshmallow for Data Validation",
        ],
      skills: "REST API (Flask), Docker, JWT, PostgreSQL, SQLAlchemy, ORM, task queues (rq), Marshmallow, Postman, Swagger",
    },
    {
      title: "MULTITHREADED FILE TRANSFER CLIENT AND SERVER",
      description:
        ["Established a high-performance multithreaded file transfer client-server system in C language using Pthread and websocket",
         "Implemented the Boss-Worker multithreading pattern for concurrency; used mutex/semaphore to avoid race condition",
         "Added a cache layer to improve the performance, using POSIX shared memory and MQ for Inter-Process Communication",
         "Utilized an AWS EC2 instance (Linux Ubuntu) for developing and testing; used debuggers (Valgrind and GDB) to detect errors",
        ],
      skills: "C, Pthread, TCP Socket, AWS",
    },
    {
      title: "GRPC AND DISTRIBUTED SYSTEM",
      description:
        ["Built a distributed file system supporting high concurrency, which allows multiple clients to communicate with a remote server",
         "Engineered a series of remote procedure calls using C++ API for gRPC and Protobuf for file transfer between clients and server", 
         "Used inotify to monitor client-side file changes and synchronized the clients and server via a weakly consistent cache strategy",],
      skills: "React, JavaScript, CSS, Bootstrap, Spring Boot, MongoDB",
    },
  ],
};

export default configs;
