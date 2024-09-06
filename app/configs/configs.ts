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
      I am a Computer Science and Mathematic Finance graduate, seeking full time 0-3 years software engineer roles.
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
          title: "Lead Data Science Analyst",
          date: "Nov. 2021 – Present",
          content: `
            <p>•	Led the development and maintenance of three Python-based automation tools, cutting the finance department’s monthly planning time by 40% and reducing errors by 60%</p>
            •	Followed multiple design patterns (Factory, Decorator, Iterator) for code readability, modularity, and maintainability\n
            •	Conducted automated Unit/End to End tests with treasury team using Pytest and Mock, achieving 90% code coverage\n
            •	Connected to a highly scalable, secure, and efficient Snowflake cloud database to store the data of the application\n
            •	Built 10+ Tableau dashboards to visualize the planning metrics in real-time for management review and decision-making\n
            •	Worked with the BT team to deploy the applications on the AWS Air9 platform (EC2), improving scalability and efficiency\n
            •	Optimized the queries (SQL) behind the dashboards to slash the query time by 50% and reduce customer complaints; consistently ranked 1st in dashboard views (5000+ monthly)\n
            •	Collaborated in an Agile team as a scrum master; utilized GitHub/Git for version control and repositories management\n
            •	Won the North Star Award once, and was nominated for the President’s Award each year among the whole company\n
          `,
        },
        {
          title: "Data Analyst",
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
      name: "React",
      iconFileName: "react.svg",
    },
    {
      name: "Remix",
      iconFileName: "remix.svg",
    },
    {
      name: "TypeScript",
      iconFileName: "typescript.svg",
    },
    {
      name: "SQL",
      iconFileName: "sql.png",
    },
    {
      name: "Node",
      iconFileName: "node.png",
    },
    {
      name: "C++",
    },
    {
      name: "Python",
    },
    {
      name: "GraphQL",
    },
    {
      name: "Docker",
    },
    {
      name: "Kubernetes",
    },
  ],
  projectsPage: [
    {
      title: "Mystic Forest Mapping",
      description:
        "I led a project to map out the Mystic Forest, a dense and mysterious area filled with hidden paths and rare Digimon. My team and I created detailed maps and documented new discoveries, which helped future explorers navigate the forest safely. It was a challenging but rewarding experience, and I felt proud to contribute to expanding our knowledge of the Digital World.",
      link: "https://digimon.fandom.com/wiki/Digimon",
      pictureFileName: "project-1.jpg",
      skills: "Mapping, Navigation, Teamwork",
    },
    {
      title: "Tamer Communication Enhancement",
      description:
        "I worked on a project to improve how Digimon and Tamers communicate during battles. I tested different signals and gestures to see which ones were most effective for quick and clear communication. The feedback helped refine our strategies and made our teamwork during battles smoother and more intuitive. It was great to see how our efforts made a real difference in the field.",
      skills: "Communication Strategy",
    },
    {
      title: "Digital Harmony Festival",
      description:
        "I helped organize the Digital Harmony Festival, an event celebrating the diverse cultures of Digimon from all over the Digital World. My role involved coordinating with different Digimon groups, setting up booths, and ensuring everyone had a great time. It was amazing to see so many Digimon come together, share their traditions, and build stronger connections within our community.",
    },
  ],
};

export default configs;
