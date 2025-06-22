import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeClass = "text-blue-600 font-bold";
  const baseClass = "px-3 py-2";

  return (
    <nav className="bg-white shadow p-4 flex space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Home
      </NavLink>
      <NavLink
        to="/systems"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Systems
      </NavLink>
      <NavLink
        to="/recipes"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Settings
      </NavLink>
    </nav>
  );
}
