import skills from "../data/skills"

const Skills = () => {
  const knownSkill = skills.filter((item) => item.level === "known")
  const learningSkill = skills.filter((item) => item.level === "learning")

  return (
    <section id="skills" className="bg-slate-800 text-white py-20 px-8 md:px-20">

      {/* Section Header */}
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
        Skills
      </p>
      <h2 className="text-3xl font-bold mb-12">
        What I Work With
      </h2>

      {/* Two Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Known Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-6">
            Current Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {knownSkill.map((item) => (
              <span
                key={item.name}
                className="bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg border border-slate-600"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {learningSkill.map((item) => (
              <span
                key={item.name}
                className="bg-slate-700 text-blue-400 text-sm font-medium px-4 py-2 rounded-lg border border-blue-400 border-dashed"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills