//src/components/AuthButtons/AuthButtons.tsx
import { Link } from "react-router-dom";
import css from "./AuthButtons.module.css";

export default function AuthButtons() {
  return (
    <div className={css.authButtons}>
      <Link to="/login" className={css.login}>
        <svg width="20" height="20" className={css.loginIcon}>
          <use href="/icons.svg#icon-log-in"></use>
        </svg>
        <span>Login</span>
      </Link>

      <Link to="/register" className={css.registerBtn}>
        Registration
      </Link>
    </div>
  );
}
