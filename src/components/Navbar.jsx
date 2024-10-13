import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul
        className="tab-bar"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
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

export default Navbar;
