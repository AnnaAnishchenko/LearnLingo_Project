// src/components/Logo/Logo.tsx

import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={css.logoContainer}>
      <svg width="28" height="28">
        <use href="/icons.svg#icon-ukraine" />
      </svg>
      <span className={css.logo}>LearnLingo</span>
    </Link>
  );
}
