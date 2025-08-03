import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <>
      <section className="cta-section text-center mt-12">
        <h3 className="cta-title text-xl font-semibold text-gray-800 mb-2">
          Want to build something amazing together?
        </h3>
        <p className="cta-subtitle text-gray-800">
          I'm always open to exciting projects and meaningful collaborations.
        </p>
        <Link
          to="/contact"
          className="message-button inline-block bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition"
        >
          Let's Connect
        </Link>
      </section>
    </>
  );
};

export default Cta;
