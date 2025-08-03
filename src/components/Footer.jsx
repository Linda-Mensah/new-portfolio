import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white text-sm">
      <div className="footer-container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-semibold text-lg tracking-wide">
          <span className="text-cyan-400">Linda Mensah</span> Portfolio
        </div>

        <nav className="flex gap-6">
          <Link
            to="/about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            About
          </Link>
          <Link
            to="/skills"
            smooth
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Skills
          </Link>
          <Link
            to="/experience"
            smooth
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            smooth
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            smooth
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <a
            href="mailto:lindaakmensah@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/linda-mensah"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/lindamensah/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/linsah_"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="copyright text-center text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} Linda Mensah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
