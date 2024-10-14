import { NavLink } from "react-router-dom";

const NavTabs = () => {
  return (
    <nav aria-label="navigation">
      <ul className="tab-bar">
        <li>
          <NavLink
            to="/main/list"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/create"
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
