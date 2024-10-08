import type { MetaFunction } from "@remix-run/node";

import configs from "~/configs/configs";

export const meta: MetaFunction = () => {
  return [
    { title: `${configs.name} | About` },
    { name: "description", content: `about ${configs.name}` },
    {
      name: "keywords",
      content: `personal, website, about, profile, ${configs.name}`,
    },
    { name: "author", content: configs.name },

    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export default function About() {
  return (
    <div className="w-full h-full md:h-[93vh] flex">
      <div
        className={`w-full rounded-xl h-full lg:h-5/6 my-auto mx-auto flex justify-center align-middle`}
        style={{ backgroundColor: configs.colors.primary }}
      >
        <div className="w-full h-full md:grid md:grid-cols-5">
          <div className="col-span-2 md:h-full md:w-full h-full flex">
            <img
              src={`pictures/${configs.homePagePictureFileName}`}
              alt={configs.name}
              className="w-2/3 md:w-3/4 mt-12 mx-auto md:my-auto rounded-lg"
            />
          </div>
          <div className="col-span-3 flex flex-col items-center w-full h-full">
            <div className="w-7/8 h-7/8 mx-auto my-auto flex flex-col items-center">
              <h1 className="text-5xl font-blackOpsOne my-6 md:my-1 lg:mb-12">
                {configs.aboutPage.greeting}
              </h1>
              <p className="font-courierPrime text-lg mx-6">
                {configs.aboutPage.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
