const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-20 px-8 md:px-20">

      {/* Section Header */}
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
        About Me
      </p>
      <h2 className="text-3xl font-bold mb-12">
        Who I Am
      </h2>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left — Paragraph */}
        <div>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I'm a final year B.Tech CSE student at HMR Institute of Technology 
            and Management, Delhi. I'm genuinely passionate about technology — 
            not just building things, but building things that matter.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I believe code is most powerful when it solves a real problem for 
            real people. I bring a never give up attitude to everything I commit 
            to — whether it's a new project, a new concept or a new challenge.
          </p>
        </div>

        {/* Right — Fact Cards */}
        <div className="flex flex-col gap-4">

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">University</p>
            <p className="text-white font-semibold">Guru Gobind Singh Indraprastha University</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">College</p>
            <p className="text-white font-semibold">HMR Institute of Technology and Management</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Degree</p>
            <p className="text-white font-semibold">B.Tech CSE — Final Year</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Status</p>
            <p className="text-green-400 font-semibold">Available for Opportunities</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About