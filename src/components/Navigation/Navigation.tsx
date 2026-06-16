// src/components/Navigation/Navigation.tsx

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.navigationLink} ${isActive ? css.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `${css.navigationLink} ${isActive ? css.active : ""}`
            }
          >
            Teachers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
