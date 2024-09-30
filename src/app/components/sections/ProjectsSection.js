import { client } from "@/sanity/lib/client";

export default async function ProjectsSection() {
  const query = `
    *[_type == "project"]{
      _id,
      title,
      slug,
      description,
      "imageUrl": mainImage.asset->url,
      mainImage{
        alt
      }
    }
  `;

  const projects = await client.fetch(query);

  return (
    <section className=" bg-white text-blue">
      <div className="relative container mx-auto px-5 lg:px-0 grid grid-cols-7 bg-grid-pattern bg-[length:calc((100%_-_40px)/7)_16.6667%] lg:bg-[length:14.2857%_16.6667%] bg-[left_1.25rem_top] lg:bg-left-top">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <h2 className="row-start-2 col-span-full lg:col-span-3 font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
          Réalisations
        </h2>
        <p className="col-span-full lg:row-start-2 lg:col-span-4 font-black text-blue text-[16px] leading-[22px] lg:text-[22px] lg:leading-[34px]">
          Découvrez nos projets de construction et de rénovation. Chaque
          réalisation témoigne de notre expertise et de notre passion pour un
          travail de qualité.
        </p>
        <div className="lg:row-start-3 col-span-full grid grid-cols-subgrid">
          {projects.map((project, index) => {
            const evenProjectRow = Math.floor(index / 2) + 4;
            console.log(evenProjectRow);
            return (
              <div
                key={project._id}
                className={`
                  col-span-full lg:row-span-3 lg:col-span-3
                  ${
                    index % 2 === 0
                      ? "lg:col-start-1 lg:row-start-auto"
                      : `lg:col-start-5 lg:row-start-${evenProjectRow}`
                  }
                `}
              >
                <img
                  src={project.imageUrl}
                  alt={project.mainImage?.alt}
                  className="h-2/3 w-full object-cover"
                />
                <div className="h-1/3">
                  <h3 className="mt-4 text-[16px] lg:text-[22px] font-black">
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
