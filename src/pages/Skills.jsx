import {
  Code,
  Code2,
  LayoutTemplate,
  Palette,
  GitBranch,
  Kanban,
  ClipboardList,
  Trello,
  Slack,
  Layers,
} from "lucide-react";

const frontendSkills = [
  { icon: <Code size={24} />, label: "HTML" },
  { icon: <Palette size={24} />, label: "CSS" },
  { icon: <Layers size={24} />, label: "Tailwind CSS" },
  { icon: <Code2 size={24} />, label: "JavaScript" },
  { icon: <LayoutTemplate size={24} />, label: "React.js" },
  { icon: <GitBranch size={24} />, label: "Git" },
];

const pmSkills = [
  { icon: <Kanban size={24} />, label: "Jira" },
  { icon: <ClipboardList size={24} />, label: "Confluence" },
  { icon: <Trello size={24} />, label: "Trello" },
  { icon: <Slack size={24} />, label: "Slack" },
];

const FlipCard = ({ title, skills }) => (
  <div className="flip-card w-[250px] h-[300px]">
    <div className="flip-inner relative w-[100%] h-[100%]">
      <div className="flip-front backface-hidden absolute h-[100%] w-[100%] bg-teal-600 text-white flex items-center justify-center text-xl font-semibold rounded-lg text-center">
        <h2>{title}</h2>
      </div>
      <div className="flip-back backface-hidden absolute h-[100%] w-[100%] bg-white text-gray-800 flex flex-col items-center justify-center rounded-lg">
        <div className="skills-list flex flex-wrap justify-center gap-[1rem]">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="skill-item text-orange-500 text-center flex flex-col items-center w-[80px]"
            >
              {item.icon}
              <p className="skill-label text-sm text-gray-800 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <>
      <section className="experience-section">
        <div className="experience-container shadow-sm flex flex-col justify-center items-center rounded-xl bg-white">
          <h2 className="experience-heading text-3xl font-bold text-gray-800 relative">
            Designing with Purpose
            <span className="title-shape block w-52">
              <svg
                viewBox="0 0 100 10"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-2"
              >
                <path
                  d="M 0,5 C 25,0 75,10 100,5"
                  fill="none"
                  stroke="orange"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h2>

          <div className="banner-box text-white text-center font-medium bg-teal-600 rounded-xl">
            <p>
              My mission is to craft intuitive, responsive, and accessible user
              interfaces.
              <br />
              <br />I aim to build seamless web experiences that blend clean
              design with efficient code, making the web a better place—one
              component at a time.
            </p>
          </div>
        </div>

        <div className="assist-container text-center rounded-xl">
          <h2 className="assist-heading text-3xl font-bold text-gray-800">
            How Can I Assist You?
            <span className="title-shape block w-52">
              <svg
                viewBox="0 0 100 10"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-2"
              >
                <path
                  d="M 0,5 C 25,0 75,10 100,5"
                  fill="none"
                  stroke="orange"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h2>

          <div className="assist-grid flex flex-col gap-6 items-center md:flex-row md:justify-center">
            {[
              {
                icon: "💻",
                title: "Frontend Dev",
                desc: "Clean, responsive UIs. Fast, accessible, mobile-first builds.",
              },
              {
                icon: "🧩",
                title: "Project Management",
                desc: "Cross-functional leadership, sprint planning & smooth delivery.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="assist-card bg-white rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="icon text-3xl block">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Web & PM Tools
          <span className="title-shape block w-52">
            <svg
              viewBox="0 0 100 10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-2"
            >
              <path
                d="M 0,5 C 25,0 75,10 100,5"
                fill="none"
                stroke="orange"
                strokeWidth="2"
              />
            </svg>
          </span>
        </h2>

        <div className="skills-flip-section flex flex-col md:flex-row justify-center items-center gap-12">
          <FlipCard title="Frontend Development" skills={frontendSkills} />
          <FlipCard title="Project Management" skills={pmSkills} />
        </div>
      </section>
    </>
  );
};

export default Skills;
