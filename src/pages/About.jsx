import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  CheckCircle,
  MapPin,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <section id="home" className="about-section animate-fade-in">
      <div className="about-container">
        <div className="about-left shadow-lg rounded-2xl border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 text-cyan-600 font-medium text-sm">
            <CheckCircle className="w-5 h-5" />
            <span className="available bg-white border border-cyan-600 text-cyan-600 rounded-2xl">
              Available for work
            </span>
          </div>

          <h1 className="about-title text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-cyan-600">Linda Mensah</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Frontend Developer
          </h2>

          <p className="about text-gray-600 leading-relaxed">
            I specialize in building responsive, user-friendly web interfaces
            using modern technologies like React, JavaScript, and Tailwind CSS.
            <br />
            I'm passionate about creating seamless user experiences and turning
            complex problems into intuitive solutions.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consequatur quaerat,
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/14iSq4S7v4lwvZiNEQ10D5LFjppV3MaOF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="resume-button bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md cursor-pointer">
                View My Resume
              </button>
            </a>
          </div>
        </div>

        <div className="about-right shadow-lg rounded-2xl border border-gray-100 flex flex-col items-center gap-8">
          <div className="right-top flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="about-right-socials bg-blue-100 shadow-md rounded-2xl text-center space-y-4">
              <h3 className="text-xl font-bold text-cyan-600">Linda Mensah</h3>

              <div className="about-location flex items-center justify-center gap-1 text-gray-600 text-sm">
                <MapPin className="size-4 text-blue-600" />
                <p>Accra, Ghana</p>
              </div>

              <div className="socials-container">
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
                className="w-64 h-80 object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
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
                className="text-cyan-700 px-4 py-2 rounded-full flex items-center gap-1"
              >
                <Star className="w-4 h-4 fill-cyan-600" />
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
