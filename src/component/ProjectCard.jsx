const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 flex flex-col gap-4 border border-slate-700">

      {/* Name + Status */}
      <div className="flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">{project.name}</h3>
        {project.status === "live" ? (
          <span className="bg-green-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
            Live
          </span>
        ) : (
          <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="bg-slate-700 text-blue-400 text-xs px-3 py-1 rounded-lg border border-slate-600"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-400 transition"
          >
            Live Preview
          </a>
        ) : null}
        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-500 text-gray-300 text-sm font-semibold px-4 py-2 rounded-full hover:border-blue-400 hover:text-blue-400 transition"
          >
            GitHub
          </a>
        ) : null}
      </div>

    </div>
  )
}

export default ProjectCard