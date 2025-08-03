import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  CheckCircle,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <section id="home" className="about-section max-w-[1200px] animate-fade-in">
      <div className="about-container flex flex-col gap-[3rem]">
        <div className="about-left flex flex-col justify-between h-[100%] shadow-lg rounded-2xl border border-gray-100 space-y-6">
          <div className="flex items-center  gap-3 text-teal-700 font-medium text-sm">
            <CheckCircle className="w-5 h-5" />
            <span className="available text-teal-700">Available for work</span>
          </div>

          <h1 className="about-title text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi! I'm a <br />{" "}
            <span className="text-teal-700">Frontend Developer</span>
          </h1>

          <p className="about text-gray-600 leading-relaxed">
            With hands-on experience in HTML, CSS, Tailwind CSS, JavaScript, and
            React, I build clean, responsive user interfaces and continuously
            refine my craft through real-world projects.
            <br />
            <br />
            My background in project management and proficiency with tools like
            Jira, Trello, and Git allow me to bring structure, clarity, and
            dependability to every client collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/14iSq4S7v4lwvZiNEQ10D5LFjppV3MaOF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="message-button bg-teal-700 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md cursor-pointer">
                View My Resume
              </button>
            </a>
          </div>
        </div>

        <div className="about-right shadow-lg rounded-2xl border border-gray-100 flex flex-col justify-between h-[100%] items-center gap-8">
          <div className="right-top flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="about-right-socials bg-blue-100 shadow-md rounded-2xl text-center space-y-4">
              <h3 className="text-xl font-bold text-teal-700">Linda Mensah</h3>

              <div className="about-location flex items-center justify-center gap-1 text-green-800 text-sm">
                {/* <MapPin className="size-4 text-blue-600" /> */}
                <p>Accra, Ghana</p>
              </div>

              <div className="socials-container grid grid-cols-2 gap-[1rem]">
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/Linda-Mensah",
                    baseColor: "text-black",
                    hoverColor: "hover:bg-gray-200",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/lindamensah/",
                    baseColor: "text-blue-700",
                    hoverColor: "hover:bg-blue-100",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:lindaakmensah@gmail.com",
                    baseColor: "text-purple-600",
                    hoverColor: "hover:bg-purple-100",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/linsah_/",
                    baseColor: "text-pink-600",
                    hoverColor: "hover:bg-pink-100",
                  },
                ].map(({ Icon, href, baseColor, hoverColor }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center transition duration-300 ${baseColor} ${hoverColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/my-image.jpg"
                alt="Linda Mensah"
                className="w-55 h-70 md:w-40 md:h-53 object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-700 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            {[
              "Developer",
              "Project Manager",
              "Problem Solver",
              "Tech Enthusiast",
            ].map((item, index) => (
              <span
                key={index}
                className="text-teal-700 px-4 py-2 rounded-full flex items-center gap-1"
              >
                <Star className="w-4 h-4 fill-teal-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
