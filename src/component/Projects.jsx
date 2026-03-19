import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20 px-8 md:px-20">

      {/* Section Header */}
      <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
        Projects
      </p>
      <h2 className="text-3xl font-bold mb-12">
        What I've Built
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Projects