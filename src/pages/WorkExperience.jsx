import { MapPin } from "lucide-react";

const WorkExperience = () => {
  return (
    <section className="work-experience-section text-center max-w-[1000px]">
      <h2 className="section-title text-3xl font-bold text-neutral-800 inline-block">
        Organizations I've happily worked with ❤️
        <span className="title-shape block h-[20px] w-[100px]">
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
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

      <div className="company-list grid grid-cols-1 gap-4">
        {[
          "Utopia Technology Africa (BTL Territories), GH",
          "Mest Africa, GH",
          "Moko Afrika, DRC Congo",
          "Gazelle Web-Tech, UK",
        ].map((company, index) => (
          <div
            key={index}
            className="company-card bg-white rounded-xl shadow-md flex items-center gap-x-4 text-sm text-neutral-700 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <MapPin className="text-orange-500 mr-3 w-4 h-4" />
            <span>{company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
