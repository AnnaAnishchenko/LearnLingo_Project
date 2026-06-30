//src/components/Modal/LogIn.tsx

import { useState } from "react";

import { loginUser } from "../../services/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validation/loginSchema";

import css from "./Modal.module.css";

interface LogInForm {
  email: string;
  password: string;
}

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LogInForm) => {
    try {
      await loginUser(data.email, data.password);

      alert("Login success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Log In</h2>

      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          className={css.input}
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={css.input}
            {...register("password")}
          />

          {errors.password && <p>{errors.password.message}</p>}

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
