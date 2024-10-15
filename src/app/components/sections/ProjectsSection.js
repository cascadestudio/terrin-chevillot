import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function ProjectsSection() {
  const query = `
  *[_type == "project"] | order(orderRank asc) {
    _id,
    title,
    slug,
    description,
    "imageUrl": mainImage.asset->url
  }
  `;

  const projects = await client.fetch(query);

  const getProjectPosition = (index) => {
    const colStart = index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-5";

    const rowStart =
      index % 2 === 0
        ? 1 + Math.floor(index / 2) * 4
        : 2 + Math.floor(index / 2) * 4;

    return { colStart, rowStart };
  };

  const gridTotalRows = Math.round(
    projects.length % 2 === 0
      ? projects.length * 2
      : Math.floor(projects.length * 2) + 1
  );

  return (
    <section id="projects" className="bg-white text-blue">
      <div
        style={{
          gridTemplateRows: `repeat(${gridTotalRows + 3}, minmax(0, 1fr))`,
          backgroundSize: `14.2857% ${100 / (gridTotalRows + 3)}%`,
        }}
        className="relative container mx-auto px-5 lg:px-0 pb-10 lg:pb-0 pt-12 lg:pt-0 lg:grid lg:grid-cols-7 lg:bg-grid-pattern lg:bg-left-top"
      >
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <h2 className="bg-white pt-8 self-end lg:border-t lg:border-grey lg:h-full lg:row-start-2 lg:col-span-3 font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
          Réalisations
        </h2>
        <p className="bg-white mb-8 lg:mb-0 pt-5 lg:pt-8 lg:pl-8 lg:border-l lg:border-t lg:border-grey lg:row-start-2 lg:col-span-4 font-black text-blue text-[16px] leading-[22px] lg:text-[22px] lg:leading-[34px]">
          Découvrez nos projets de construction et de rénovation. Chaque
          réalisation témoigne de notre expertise et de notre passion pour un
          travail de qualité.
        </p>

        <div
          className="lg:row-start-3 col-span-full lg:gap-y-0 lg:grid lg:grid-cols-subgrid lg:grid-rows-subgrid"
          style={{
            gridRowEnd: gridTotalRows + 3,
          }}
        >
          {projects.map((project, index) => {
            const position = getProjectPosition(index);
            return (
              <div
                key={project._id}
                className={`mb-8 lg:mb-0 lg:h-full lg:col-span-3 lg:grid lg:grid-rows-3 ${position.colStart}`}
                style={{
                  gridColumnStart: position.colStart,
                  gridRowStart: position.rowStart,
                  gridRowEnd: position.rowStart + 3,
                }}
              >
                <div className="relative w-full h-full lg:row-span-2">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={960}
                    height={540}
                    className="w-full h-[230px] lg:h-full object-cover"
                  />
                  <img
                    src="/triangle-project.svg"
                    alt="Triangle"
                    className="absolute top-[-1px] left-[-1px] h-[9px] md:h-[13px] lg:h-[22px] xl:h-[27px] 2xl:h-[32px]"
                  />
                  <img
                    src="/triangle-project.svg"
                    alt="Triangle"
                    className="absolute bottom-[-1px] right-[-1px] h-[9px] md:h-[13px] lg:h-[22px] xl:h-[27px] 2xl:h-[32px] transform scale-x-[-1] scale-y-[-1]"
                  />
                </div>
                <div className="pt-2 lg:pt-4 pb-5 lg:pb-0  lg:pl-3 lg:row-span-1 bg-white lg:border-l lg:border-grey">
                  <h3 className=" text-[16px] lg:text-[22px] font-black">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[12px] lg:text-[16px] font-bold">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
