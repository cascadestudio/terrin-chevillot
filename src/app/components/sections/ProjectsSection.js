import { client } from "@/sanity/lib/client";

export default async function ProjectsSection() {
  const query = `
  *[_type == "project"] | order(orderRank desc)[0...4] {
    _id,
    title,
    slug,
    description,
    "imageUrl": mainImage.asset->url
  }
  `;

  const projects = await client.fetch(query);

  return (
    <section id="projects" className="bg-white text-blue">
      <div className="relative container mx-auto px-5 lg:px-0 pb-10 lg:pb-0 grid grid-cols-7 grid-rows-14 lg:grid-rows-11 lg:bg-grid-pattern bg-[length:calc((100%_-_40px)/7)_10%] lg:bg-[length:14.2857%_9.1%] bg-[left_1.25rem_top] lg:bg-left-top">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <h2 className="bg-white pt-5 lg:pt-8 border-t border-grey h-full row-start-2 col-span-full lg:col-span-3 font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
          Réalisations
        </h2>
        <p className="bg-white mb-8 lg:mb-0 pt-5 lg:pt-8 lg:pl-8 lg:border-l border-t border-grey col-span-full row-start-3 lg:row-start-2 lg:col-span-4 font-black text-blue text-[16px] leading-[22px] lg:text-[22px] lg:leading-[34px]">
          Découvrez nos projets de construction et de rénovation. Chaque
          réalisation témoigne de notre expertise et de notre passion pour un
          travail de qualité.
        </p>

        <div className="row-start-4 lg:row-start-3 col-span-full row-span-12 gap-y-8 lg:gap-y-0 lg:row-span-9 grid grid-cols-subgrid lg:grid-rows-subgrid">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`
            col-span-7 row-span-3 lg:col-span-3 grid lg:block
            ${index === 0 ? "lg:col-start-1 lg:row-start-1" : ""}
            ${index === 1 ? "lg:col-start-5 lg:row-start-2" : ""}
            ${index === 2 ? "lg:col-start-1 lg:row-start-5" : ""}
            ${index === 3 ? "lg:col-start-5 lg:row-start-6" : ""}
          `}
            >
              <div className="relative w-full h-full row-span-2 lg:h-2/3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <img
                  src="/triangle-project.svg"
                  alt="Triangle"
                  className="absolute top-0 left-[-1px] h-[9px] md:h-[13px] lg:h-[22px] xl:h-[27px] 2xl:h-[32px]"
                />
                <img
                  src="/triangle-project.svg"
                  alt="Triangle"
                  className="absolute bottom-0 right-[-1px] h-[9px] md:h-[13px] lg:h-[22px] xl:h-[27px] 2xl:h-[32px] transform scale-x-[-1] scale-y-[-1]"
                />
              </div>
              <div className="pt-2 lg:pt-4 row-span-1 bg-white h-full lg:h-1/3 border-b border-grey lg:border-none">
                <h3 className=" text-[16px] lg:text-[22px] font-black">
                  {project.title}
                </h3>
                <p className="mt-2 text-[12px] lg:text-[16px] font-bold">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
