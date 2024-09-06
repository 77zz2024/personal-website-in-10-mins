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
    greeting: "Hi! I'm Zoe Wu",
    content: `
      I am a Computer Science and Mathematic Finance graduate, seeking full time 0-3 years software engineer roles.
      `,
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "Digital Survival School",
          date: "2021-2023",
          location: "Earth",
          content: `
          I spent a whole year at Digital Survival School, where I learned the ropes of thriving in the ever-changing Digital World.
          The lessons ranged from navigating tricky terrains to figuring out how to handle encounters with various Digimon.
          One of my favorite parts was the teamwork drills—they really helped me understand the importance of working together
          and supporting my fellow Digimon, which is something I always carry with me on adventures.`,
        },
        {
          title: "Tamer's Training Program",
          date: "2020-2020",
          content: `For six months, I was in the Tamer's Training Program,
          where I focused on building a strong bond with human Tamers.
          The program was all about communication—learning how to bridge the gap
          between Digimon instincts and human expectations. I practiced translating my actions and signals so my Tamer could understand me better.
          This training made me a more reliable partner, and I'm proud of how it strengthened the trust between us.`,
        },
      ],
    },
    {
      sectionName: "Work",
      items: [
        {
          title: "Digital World Exploration Team - Junior Scout",
          date: "2024-Present",
          content: `
          As a Junior Scout with the Digital World Exploration Team,
          I had the exciting job of exploring new and uncharted areas.
          I mapped out unknown regions, took notes on new Digimon I encountered,
          and reported back with my findings. It was a thrilling experience that put my navigation skills and courage to the test.
          I loved discovering hidden spots and ensuring my team stayed safe during our explorations.
          It taught me a lot about resilience and the value of teamwork.
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
