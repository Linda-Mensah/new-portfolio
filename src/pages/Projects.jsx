export default function Projects() {
  const projects = [
    {
      title: "CodeBlue · Emergency Services App",
      tags: ["Real-Time", "Multi-Tenant", "API Integration", "React"],
      link: "https://codeblue-app.netlify.app/",
      img: "/images/codeblue-thumbnail.png",
    },

    {
      title: "Bye-Bye Store · Vendor Ad Portal",
      tags: ["CRUS App", "REST API", "React UI", "Tailwind CSS"],
      link: "https://bye-bye-store.netlify.app/",
      img: "/images/bb-store-thumbnail.png",
    },

    {
      title: "MF Library · Book Management App",
      tags: ["CRUD App", "REST API", "React UI", "Responsive"],
      link: "https://mf-library.netlify.app/",
      img: "/images/mf-lib-thumbnail.png",
    },

    {
      title: "AgroSave Website · Post-Harvest Solutions",
      tags: ["Client Project", "Responsive Design", "React"],
      link: "https://agrosavegh-web.netlify.app/",
      img: "/images/agrosave-thumbnail.png",
    },

    {
      title: "KYA Website · Youth Empowerment Platform",
      tags: ["Client Project", "Web Design", "React"],
      link: "https://kpo-youth-association.netlify.app/",
      img: "/images/kya-thumbnail.png",
    },
    {
      title: "CAMA · Care Operations Management App",
      tags: ["Project Management", "Agile", "QA", "UAT"],
      link: "https://camapp.org.uk/",
      img: "/images/cama-thumbnail.png",
    },
  ];

  return (
    <section className="projects-section  max-w-[1200px]">
      <div className="header-container text-center">
        <h2 className="section-title inline-block text-4xl font-bold text-gray-900 relative">
          Selected Work
          <span className="title-shape block h-3 w-28">
            <svg
              viewBox="0 0 100 10"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <path
                d="M 0,5 C 25,0 75,10 100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="section-subtitle text-center text-lg text-gray-500">
          A collection of my recent projects
        </p>
      </div>

      <div className="projects-grid flex flex-col md:grid md:grid-cols-2 gap-[60px]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="image-container aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white gap-2">
                  <span className="font-medium">View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="card-content">
              <h3 className="project-title text-lg font-semibold text-gray-800">
                <span className="text-orange-500 font-bold">
                  {project.title.split("·")[0].trim()}
                </span>{" "}
                · {project.title.split("·")[1].trim()}
              </h3>
              <div className="tags-container flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="tag bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
