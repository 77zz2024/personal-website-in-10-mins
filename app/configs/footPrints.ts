import { FootPrintData } from "~/components/FootPrintMap.client";

export const footPrintsWithPicture: FootPrintData[] = [
  {
    position: [35.6895, 139.6917],
    image: "pictures/footprints/Tokyo.jpg",
    title: "Tokyo",
  },
  {
    position: [40.7128, -74.006],
    image: "pictures/footprints/NewYork.jpg",
    title: "New York City",
  },
];

export const footPrintsWithoutPicture: FootPrintData[] = [
  { position: [30.322601423651463, -81.64580475503301] },
  { position: [29.63671321021153, -82.34585065823497] },
  { position: [38.569512960965156, -109.54559200208108] },
  { position: [43.8256, 87.6168] },
  { position: [48.5704, 87.7517] },
];
