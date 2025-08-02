const Experience = () => {
  return (
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

        <div className="banner-box text-white text-center font-medium bg-cyan-700 rounded-xl">
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

      <div className="assist-container text-center bg-gray-100 rounded-xl">
        <h2 className="assist-heading text-3xl font-bold text-gray-800">
          How Can I Assist You?
          <span className="title-shape block w-52 mx-auto mt-2">
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
  );
};

export default Experience;
