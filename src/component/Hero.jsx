const Hero = () => {
  return (
    <section id="home" className="bg-slate-900 text-white min-h-screen flex flex-col justify-center px-8 md:px-20">

      {/* Tag */}
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
        Open to Work — Fresher Frontend Developer
      </p>

      {/* Name */}
      <h1 className="text-5xl font-bold mb-3">
        Hi, I'm <span className="text-blue-400">Jayadev Bemal</span>
      </h1>

      {/* Role */}
      <h2 className="text-2xl text-gray-400 font-medium mb-4">
        Frontend Developer · Aspiring Full Stack
      </h2>

      {/* Tagline */}
      <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
        I build purposeful web experiences — driven by curiosity, powered by code, and committed to solving real problems.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition">View Projects</a>
        <a
          href="#"
          className="border border-blue-400 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

    </section>
  )
}

export default Hero