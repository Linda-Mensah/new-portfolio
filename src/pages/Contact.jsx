const Contact = () => {
  return (
    <>
      <h2 className="contact-title text-2xl font-semibold text-black text-center">
        Now you know about me. Let's get to know you too.
      </h2>

      <section className="contact-section max-w-[800px] mx-auto bg-gray-100 text-center rounded-xl shadow-md">
        <p className="contact-subtitle text-teal-700 text-base">
          Got a project in mind or just want to connect? Hit me up.
        </p>

        <form className="contact-form flex flex-col gap-4">
          <div className="input-row flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="input flex-1 border border-gray-300 rounded-md text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="input flex-1 border border-gray-300 rounded-md text-base"
            />
          </div>

          <textarea
            placeholder="Tell me about your project or idea..."
            required
            className="input border border-gray-300 rounded-md text-base min-h-[120px] resize-y"
          ></textarea>

          <button
            type="submit"
            className="message-button bg-orange-600 text-white cursor-pointer rounded-md text-base font-medium hover:bg-orange-700 transition-colors w-fit self-center"
          >
            Send Message
          </button>
        </form>

        <div className="contact-bottom bg-cyan-50 border-t border-gray-300 rounded-md flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="contact-bottom-left flex-1 min-w-[220px]">
            <h6 className="contact-connect text-cyan-700 text-base font-semibold">
              Let's connect and chat
            </h6>
            <a
              href="mailto:lindakmensah@gmail.com"
              className="email-link text-orange-600 text-sm hover:underline"
            >
              lindaakmensah@gmail.com
            </a>
          </div>

          <div className="contact-bottom-right flex-1 min-w-[220px]">
            <div className="social-card border border-gray-300 rounded-lg bg-white shadow-sm hover:-translate-y-1 transition-transform">
              <small className="text-gray-600 text-xs uppercase tracking-wide mb-1 block">
                Find me on socials!
              </small>
              <p className="text-sm">
                📷{" "}
                <a
                  href="https://www.instagram.com/linsah_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 font-bold hover:text-orange-600"
                >
                  Instagram
                </a>{" "}
                | 💼{" "}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 font-bold hover:text-orange-600"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
