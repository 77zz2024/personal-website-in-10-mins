import { Configs } from "~/types/configTypes";

const configs: Configs = {
  name: "Gabumon",
  homePagePictureFileName: "avatar.png",
  pages: ["about", "experience", "skills", "projects", "footprints"],
  colors: {
    primary: "#FFD562",
    background: "#FFE591",
  },
  navBar: {
    socialMediaLinks: {
      email: "gabumon@gmail.com",
      facebook: "",
      x: "",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  aboutPage: {
    greeting: "Hi!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla. Duis vestibulum non leo eget blandit. Cras vel erat volutpat, bibendum ex facilisis, gravida sem. Vivamus commodo lobortis enim iaculis blandit. Vestibulum laoreet quam id sodales rhoncus. In vulputate purus in tincidunt scelerisque. Nullam congue dui nisi, sed ornare leo fringilla porttitor. Sed consequat massa nec imperdiet interdum. Fusce cursus dictum dignissim. In ex enim, tristique at luctus ornare, ultricies posuere enim. Duis et augue eget lorem vulputate feugiat. Maecenas id leo in mi hendrerit tincidunt. Donec blandit massa odio, quis elementum ligula iaculis placerat. Vestibulum vitae sodales felis.",
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "University of Adipiscing",
          date: "2020-2024",
          location: "Earth",
          content: "Master of tincidunt.",
        },
        {
          title: "University of Interdum",
          date: "2019-2024",
          content: "Bachelor of Nullam",
        },
      ],
    },
    {
      sectionName: "Work",
      items: [
        {
          title: "Placerat.",
          date: "2021-2022",
          content: "Nullam porttitor Intern",
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
      name: "Node",
      iconFileName: "react.svg",
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
      name: "SQL",
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
      title: "Project Lacus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla.",
      link: "https://digimon.fandom.com/wiki/Digimon",
      pictureFileName: "project-1.jpg",
      skills: "React, TypeScript",
    },
    {
      title: "Project Rhoncus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacus sit amet rhoncus fringilla.",
      link: "https://digimon.fandom.com/wiki/Digimon",
      skills: "C++",
    },
    {
      title: "Project Interdum",
      description:
        "us adipiscing elit. Sed interdum lacus sit amet rhoncus sit amet rhoncus fringilla.Lorem ipsum dolor sit amet, consectetur fringilla.",
      link: "https://digimon.fandom.com/wiki/Digimon",
      skills: "C++",
    },
  ],
};

export default configs;
