//src/components/LogIn/LogIn.tsx

import { useState } from "react";

import css from "./LogIn.module.css";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Log In</h2>

      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <form className={css.form}>
        <input type="email" placeholder="Email" className={css.input} />

        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={css.input}
          />

          <button
            type="button"
            className={css.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Show password"
          >
            <svg width="20" height="20">
              <use
                href={
                  showPassword
                    ? "/icons.svg#icon-eye"
                    : "/icons.svg#icon-eye-off"
                }
              />
            </svg>
          </button>
        </div>

        <button type="submit" className={css.logInButton}>
          Log In
        </button>
      </form>
    </div>
  );
}
