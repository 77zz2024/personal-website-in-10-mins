import configs from "~/configs/configs";

type ProjectWithoutPictureProps = {
  title: string;
  description: string;
  description_b?: string;
  link?: string;
  skills?: string;
};

export default function ProjectWithPicture(props: ProjectWithoutPictureProps) {
  return (
    <div className="w-full flex flex-col md:flex-row mb-4">
      <div
        className={`w-full rounded-xl h-full lg:h-5/6 my-auto mx-auto flex justify-center align-middle`}
        style={{ backgroundColor: configs.colors.primary }}
      >
        <div className="py-4 px-6 w-full h-full">
          <div className="flex flex-col items-center px-4 md:px-0 w-full h-full">
            <div className="w-7/8 h-7/8 mx-auto my-auto flex flex-col">
              {props.link ? (
                <a href={props.link} target="_blank" rel="noreferrer">
                  <h1 className="text-3xl underline underline-offset-4 font-blackOpsOne my-6 md:my-1 lg:mb-2">
                    {props.title}
                  </h1>
                </a>
              ) : (
                <h1 className="text-3xl font-blackOpsOne my-6 md:my-1 lg:mb-2">
                  {props.title}
                </h1>
              )}
              <p className="font-courierPrime text-lg">{props.description}</p>
              {props.description_b && (<p className="font-courierPrime text-lg">{props.description2}</p>)}
              {props.skills && (
                <p className="font-blackOpsOne text-lg">{props.skills}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
