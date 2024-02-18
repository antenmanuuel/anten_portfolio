import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">AM</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1XVD26RAvRePODDQZnndoM0z2X_NAtGDB/view?usp=sharing"
            className="text-black hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
