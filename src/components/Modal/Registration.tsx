//src/components/Registration/Registration.tsx

import { useState } from "react";

import css from "./Modal.module.css";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration</h2>

      <p className={css.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form className={css.form}>
        <input type="name" placeholder="Name" className={css.input} />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
