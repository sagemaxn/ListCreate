import { NavLink } from "react-router-dom";

const NavTabs = () => {
  return (
    <nav aria-label="navigation" className="nav-tabs">
      <ul className="tab-bar">
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavTabs;
