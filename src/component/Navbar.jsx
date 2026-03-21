const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4   flex flex-col md:flex-row justify-between  items-center sticky top-0 z-50 shadow-md">
      
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 no-underline">
        <div className="bg-blue-500 text-white font-bold text-sm w-9 h-9 rounded-lg flex items-center justify-center ">
          JB
        </div>
        <span className="text-white font-semibold text-lg ">Jayadev Bemal</span>
      </a>

      {/* Nav Links */}
      <ul className="flex gap-8 list-none">
        <li>
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-400 transition text-sm"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition text-sm"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition text-sm"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition text-sm"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition text-sm"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;