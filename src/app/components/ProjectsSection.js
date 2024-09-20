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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold">Our Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-4 shadow">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-2">{project.description}</p>
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.mainImage?.alt || "Project image"}
                  className="mt-4 rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
