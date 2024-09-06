import { FootPrintData } from "~/components/FootPrintMap.client";

export const footPrintsWithPicture: FootPrintData[] = [
  {
    position: [22.2700, 113.5767],
    image: "zhuhai.jpg",
    title: "Zhuhai",
  },
  {
    position: [40.7128, -74.006],
    image: "NewYork.jpg",
    title: "New York City",
  },
    {
    position: [38.6270, 90.1994],
    image: "saint_louis.jpg",
    title: "Saint Louis",
  },
    {
    position: [41.8781, 87.6298],
    image: "chicago.jpg",
    title: "Chicago",
  },
];

export const footPrintsWithoutPicture: FootPrintData[] = [
  { position: [38.569512960965156, -109.54559200208108] },
  { position: [48.5704, 87.7517] },
];
