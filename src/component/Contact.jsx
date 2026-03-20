const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-800 text-white py-20 px-8 md:px-20 text-center"
    >
      {/* Header */}
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
        Contact
      </p>
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto ">
        Open to frontend roles, internships and freelance projects. Feel free to
        reach out!
      </p>

      {/* Links */}
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:jugarajbemal@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/JayadevBemal"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-500 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jayadev-bemal-6721991ba"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-500 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
